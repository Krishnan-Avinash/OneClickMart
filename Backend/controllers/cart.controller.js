import { User } from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Find the user by ID
    let user = await User.findById(userId);
    if (!user) {
      console.error("User not found");
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    console.log("User found: ", user);

    let cartData = user.cart;

    console.log("Cart before update: ", user.cart);

    if (!user.cart[itemId]) {
      console.log("Item does not exist in cart, adding it");
      user.cart[itemId] = 1;
    } else {
      console.log("Item exists in cart, incrementing quantity");
      user.cart[itemId] += 1;
    }

    console.log("Updated cart data: ", user.cart);
    await User.findByIdAndUpdate(userId, { cart: cartData });
    res.status(200).json({ success: true, message: "added" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ success: false, message: "Failed to add to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    console.log("userData: ", userData);
    let cartData = await userData.cart;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cart: cartData });
    res.status(200).json({ success: true, message: "Removed from cart" });
  } catch (error) {
    res.status(500).json({ success: false, message: "error" });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  console.log("Getting data");
  try {
    let user = await User.findById(req.body.userId);
    let cartData = await user.cart;
    console.log("Cart: ", cartData);
    res.status(200).json({ success: true, data: cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: "error" });
  }
};

export { addToCart, removeFromCart, getCart };
