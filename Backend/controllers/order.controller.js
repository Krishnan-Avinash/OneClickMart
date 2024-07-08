import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";

const createOrder = async (req, res) => {
  try {
    const {
      email,
      fullName,
      state,
      streetAddress,
      apartment,
      town,
      number,
      total,
      product,
    } = req.body;

    // Validate input
    if (
      !email ||
      !fullName ||
      !state ||
      !streetAddress ||
      !town ||
      !number ||
      !total ||
      !Array.isArray(product) ||
      product.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Find user by email
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // console.log("user:::::", findUser);

    // Extract necessary fields from product
    const selectedFields = product.map((prod) => ({
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity,
    }));

    // Create new order
    const newOrder = {
      email,
      fullName,
      state,
      streetAddress,
      apartment,
      town,
      number,
      total,
      product: selectedFields,
      state: "Processing",
    };

    // Push new order to user's orders array
    findUser.orders.push(newOrder);
    findUser.cart = {};

    // Save updated user document
    await findUser.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "New Order Created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred and the order could not be created",
    });
  }
};

const createOrderForAdmin = async (req, res) => {
  try {
    const {
      email,
      fullName,
      state,
      streetAddress,
      apartment,
      town,
      number,
      total,
      product,
    } = req.body;

    // Validate input
    if (
      !email ||
      !fullName ||
      !state ||
      !streetAddress ||
      !town ||
      !number ||
      !total ||
      !Array.isArray(product) ||
      product.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Find user by email
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // console.log("user:::::", findUser);

    // Extract necessary fields from product
    const selectedFields = product.map((prod) => ({
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity,
    }));

    // Create new order
    const newOrder = await new Order({
      email,
      fullName,
      state,
      streetAddress,
      apartment,
      town,
      number,
      total,
      product: selectedFields,
      state: "Processing",
    });

    // Push new order to user's orders array
    // findUser.orders.push(newOrder);
    // findUser.cart = {};

    // Save updated user document
    await newOrder.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "New Order Created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred and the order could not be created",
    });
  }
};

const getIndividualOrder = async (req, res) => {
  console.log("req.params: ", req.params);
  try {
    const { email } = req.params;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find user" });
    }
    res.status(200).json({ success: true, data: findUser.orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Some error occurred" });
  }
};

export { createOrder, createOrderForAdmin, getIndividualOrder };
