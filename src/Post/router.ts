import { Router } from "express";
import { postController } from "./PostController";

export const postRouter = new (Router as any)();

postRouter.get("/posts", postController.getAll);
postRouter.get("/posts/:id", postController.getById);
postRouter.post("/posts", postController.create);
postRouter.put("/posts", postController.update);
postRouter.delete("/posts/:id", postController.delete);
