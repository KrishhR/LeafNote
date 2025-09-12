import { Router } from "express";
import multer from "multer";
import path from "path";
import Blog from "../models/blog.js";
import Comment from "../models/comments.js";

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(`./public/uploads`));
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
})
const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    })
});

router.post("/", upload.single("coverImageUrl"), async (req, res) => {
    const { blogTitle, blogBody } = req.body;
    const blog = await Blog.create({
        title: blogTitle,
        body: blogBody,
        author: req.user.id,
        cover_image_url: `/uploads/${req.file.filename}`,
    });
    return res.redirect(`/blog/${blog._id}`);
})

router.get("/:id", async (req, res) => {
    const blogId = req.params.id;
    const allComments = await Comment.find({ blog: blogId }).populate("author");
    const blog = await Blog.findById(blogId).populate("author");
    return res.render("blogPage", {
        blog: blog,
        user: req.user,
        comments: allComments,
    })
    
})

router.post("/comment/:blogId", async (req, res) => {
    await Comment.create({
        content: req.body.content,
        blog: req.params.blogId,
        author: req.user.id,
    })
    return res.redirect(`/blog/${req.params.blogId}`);
});

export default router;