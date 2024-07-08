import express from "express";
import {
  createOrder,
  createOrderForAdmin,
  getIndividualOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/createOrder", createOrder);
orderRouter.post("/createOrderForAdmin", createOrderForAdmin);
orderRouter.get("/getIndividualOrder/:email", getIndividualOrder);

export default orderRouter;
