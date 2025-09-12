import { Router } from "express";
import User from "../models/user.js";
import multer from "multer";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(`./public/images`));
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
})
const upload = multer({ storage: storage });

router.get("/signin", (req, res) => {
    return res.render("Signin");
});

router.get("/signup", (req, res) => {
    return res.render("Signup");
});

router.post("/signup", upload.single("profile_image_url"), async (req, res) => {
    const { fullName, email, password } = req.body;
    // use multer for profile image handling
    await User.create({
        full_name: fullName,
        email: email,
        password: password,
        profile_image_url: `/images/${req.file.filename}`,
    });
    return res.redirect("/");
    // TODO: Add toast notification for successful signup
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res
            .cookie("auth_token", token, {
                sameSite: true,
                httpOnly: true,
                secure: true,
            })
            .redirect("/");

        // TODO: Add toast notification for successful login
        // return res.cookie('auth_token', token).render("Homepage", {
        //     user: req.user,
        //     login: true,
        // });
    } catch (error) {
        return res.render("signin", {
            error: "Incorrect email or password",
        });
    }
});

router.get("/logout", (req, res) => {
    return res.clearCookie("auth_token").redirect("/");
});

export default router;
