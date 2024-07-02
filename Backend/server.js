import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDb();
app.use("/api/oneClickMart", userRouter);

app.listen(process.env.PORT, () =>
  console.log("Listening on port: ", process.env.PORT)
);
