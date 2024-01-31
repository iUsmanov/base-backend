import { Request, Response } from "express";
import { postService } from "./PostService";
import { UploadedFile } from "express-fileupload";

class PostController {
   async create(req: Request, res: Response) {
      try {
         const post = await postService.create(req.body, req.files?.picture as UploadedFile);
         res.status(200).json(post);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getAll(req: Request, res: Response) {
      try {
         const posts = await postService.getAll();

         return res.json(posts);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getById(req: Request, res: Response) {
      try {
         const post = await postService.getById(req.params.id);
         return res.json(post);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async update(req: Request, res: Response) {
      try {
         const updatedPost = await postService.update(req.body);
         return res.json(updatedPost);
      } catch (error: any) {
         res.status(500).json(error.message);
      }
   }

   async delete(req: Request, res: Response) {
      try {
         const post = await postService.delete(req.params.id);
         return res.json(post);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}

export const postController = new PostController();
