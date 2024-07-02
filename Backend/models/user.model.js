import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
    },
    dataSet: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
      default: "",
    },
    messages: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
