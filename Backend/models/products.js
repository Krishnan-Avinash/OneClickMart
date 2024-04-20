const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  productType: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productMainImage: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
