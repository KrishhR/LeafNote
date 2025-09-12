import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET || "$uperMan01$cret";

const createTokenForUser = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        profileImageUrl: user.profile_image_url,
        role: user.role,
        name: user.full_name,
    }
    const token = jwt.sign(payload, secret);
    return token;
}

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        console.log(error);
    }
}

export { createTokenForUser, verifyToken };