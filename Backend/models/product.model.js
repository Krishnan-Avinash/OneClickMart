import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mainImg: {
      type: String,
      required: true,
    },
    // images: {
    //   type: [String],
    //   required: true,
    // },
    category: {
      type: String,
      required: true,
    },
    available: {
      type: Number,
      required: true,
    },
    newAvailable: {
      type: [Number],
      required: false,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
