import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/createOrder", createOrder);

export default orderRouter;
