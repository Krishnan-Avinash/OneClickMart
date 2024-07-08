import express from "express";
import {
  addProduct,
  deleteProduct,
  getParticularProduct,
  getProduct,
  updateDetails,
} from "../controllers/product.controller.js";

import multer from "multer";

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploaded-files",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

productRouter.post("/addProduct", upload.single("mainImg"), addProduct);
productRouter.get("/getProduct", getProduct);
productRouter.delete("/deleteProduct", deleteProduct);
productRouter.patch("/updateProduct", updateDetails);
productRouter.get("/getParticularProduct", getParticularProduct);

export default productRouter;
