import { Product } from "../models/product.model.js";
import mongoose from "mongoose";

const addProduct = async (req, res) => {
  // console.log("REQ.body: ", req.body);
  // console.log("req.file: ", req.file);
  let image_filename = req.file.filename;
  // console.log("file name: ", image_filename);
  const {
    name,
    price,
    description,
    // mainImg,
    category,
    available,
    // images
  } = req.body;
  if (
    !name ||
    !price ||
    !description ||
    !category ||
    !available
    // || images.length == 0
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All details required" });
  }
  try {
    const newProduct = await new Product({
      name,
      price,
      description,
      mainImg: image_filename,
      category,
      available,
      // images,
    });
    // console.log("REQ: ", req);
    // console.log("REQ.file: ", req.file);
    newProduct.save();
    res.status(200).json({ success: true, message: "New Product added" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occured while adding new product",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occured while getting products",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await Product.findByIdAndDelete(req.body._id);
    if (!response) {
      return res
        .status(500)
        .json({ successf: false, message: "Product not found" });
    }
    if (response) {
      res.status(200).json({ success: true, message: "Deleted successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ suceess: false, message: "Some error occured while deleting" });
  }
};

const updateDetails = async (req, res) => {
  const { newAvailable, _id } = req.body;
  if (newAvailable <= 0) {
    return res
      .status(400)
      .json({ success: false, message: "Kindly enter a valid quantity" });
  }
  try {
    const element = await Product.findById(_id);
    element.newAvailable.push(newAvailable);
    element.available = element.available + newAvailable;
    element.save();
    res.status(200).json({ success: true, message: "Changes saved" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Some error occured" });
  }
};

const getParticularProduct = async (req, res) => {
  const { id } = req.query; // Extract id from query parameters
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "product ID not received" });
  }
  try {
    const findProduct = await Product.findOne({ _id: id });
    if (findProduct) {
      return res.status(200).json({ success: true, user: findProduct });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Product does not exist" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Error occurred" });
  }
};

export {
  addProduct,
  getProduct,
  deleteProduct,
  updateDetails,
  getParticularProduct,
};
