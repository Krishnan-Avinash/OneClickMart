const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
app.use(bodyParser.json());

const productRoutes = require("./routes/products");

app.use("/product", productRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/OneClickMart")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App is listening at Port: ${process.env.PORT}`);
});
