import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: false,
    },
    town: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
