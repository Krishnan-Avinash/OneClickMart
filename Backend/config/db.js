import mongoose from "mongoose";

import "dotenv/config";

export const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.CONNECTION_STRING)
      .then(() => console.log("Db connected..!!"));
  } catch (error) {
    console.log("Db not connected..!!");
  }
};
