import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: "blog",
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, { timestamps: true });

const Comment = model("comment", commentSchema);

export default Comment;