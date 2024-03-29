import mongoose from "mongoose";

const Post = new mongoose.Schema({
   author: { type: String, required: true },
   title: { type: String, required: true },
   content: { type: String, required: true },
   picture: { type: String },
});

export const PostSchema = mongoose.model("Post", Post);
