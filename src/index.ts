import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { postRouter } from "./Post";

const PORT = 5000;
const DB_URL = "mongodb://localhost:27017/database-name";
const app = express();

app.use(fileUpload({}));
app.use(express.json());
app.use(express.static("static"));
app.use(postRouter);

async function startApp() {
   try {
      await mongoose.connect(DB_URL);
      app.listen(PORT, () => {
         console.log("SERVER IS STARTED" + PORT);
      });
   } catch (error) {
      console.log(error);
   }
}

startApp();

// index.ts
//   |||
// postRouter
//   |||
// postController
//   |||
// postService
//   |||
// PostSchema
