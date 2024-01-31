import { UploadedFile } from "express-fileupload";
import { PostSchema } from "./Post";
import { Post } from "./types";
import { fileService } from "../FileService";

class PostService {
   async create(post: Post, picture?: UploadedFile) {
      let fileName;
      if (picture) {
         fileName = fileService.saveFile(picture);
      }
      const createdPost = await PostSchema.create({ ...post, picture: fileName });
      return createdPost;
   }

   async getAll() {
      const posts = await PostSchema.find();
      return posts;
   }

   async getById(id?: string) {
      if (!id) {
         throw new Error("You have not defined post id");
      }
      const post = await PostSchema.findById(id);
      return post;
   }

   async update(post: Post) {
      if (!post._id) {
         throw new Error("You have not defined post id");
      }
      const updatedPost = await PostSchema.findByIdAndUpdate(post._id, post, { new: true });
      return updatedPost;
   }

   async delete(id?: string) {
      if (!id) {
         throw new Error("You have not defined post id");
      }
      const post = await PostSchema.findByIdAndDelete(id);
      return post;
   }
}

export const postService = new PostService();
