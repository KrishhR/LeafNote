import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';

import connectMongoDB from './connection.js';

import userRoutes from "./routes/user.js";
import blogRoutes from "./routes/blog.js";
import { checkForAuthCookie } from './middlewares/auth.js';
import Blog from "./models/blog.js";

config();
const PORT = process.env.PORT || 3100;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));
app.use(checkForAuthCookie("auth_token"));

const startServer = async () => {
    await connectMongoDB();

    app.get('/', async (req, res) => {
        const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
        return res.render('Homepage', {
            user: req.user,
            blogs: allBlogs,
        });
    })
    app.use('/user', userRoutes);
    app.use('/blog', blogRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();