import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/addToCart", addToCart);
cartRouter.post("/removeFromCart", removeFromCart);
cartRouter.get("/getCart", getCart);

export default cartRouter;
