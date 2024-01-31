import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
import path from "path";

class FileService {
   saveFile(file: UploadedFile) {
      try {
         const fileName = v4() + ".png";
         const filePath = path.resolve("static", fileName);
         file.mv(filePath);
         return fileName;
      } catch (error) {
         console.log(error);
      }
   }
}

export const fileService = new FileService();
