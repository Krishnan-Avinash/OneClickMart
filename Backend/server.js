import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDb();
app.use("/api/oneClickMart", userRouter);
app.use("/api/oneClickMart/admin", productRouter);
app.use("/images", express.static("uploaded-files"));
app.use("/api/oneClickMart/cart", cartRouter);

app.listen(process.env.PORT, () =>
  console.log("Listening on port: ", process.env.PORT)
);
