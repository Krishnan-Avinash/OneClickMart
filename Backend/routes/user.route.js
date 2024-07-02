import express from "express";
import {
  getUser,
  registerUser,
  sendMessage,
  updatePassword,
  updateUserData,
} from "../controllers/user.controller.js";

// Create an Express router for user-related routes
const userRouter = express.Router();

// POST route for user registration
userRouter.post("/", registerUser);

// PATCH route for updating user data
userRouter.patch("/updateUserData", updateUserData);

// PATCH route for updating user password
userRouter.patch("/updatePassword", updatePassword);

// GET route for retrieving user data
userRouter.get("/getUser/:email", getUser);

userRouter.patch("/sendMessage", sendMessage);

// Export the user router for use in the main application
export default userRouter;
