const Product = require("../models/products");
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length) {
      res.status(200).send({ products });
    } else {
      res.status(204).send({ msg: "Products not available" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    await newProduct.save();
    await res.status(201).send({ msg: "New Product Added" });
  } catch (error) {
    res.status(500).send({ error });
  }
};
