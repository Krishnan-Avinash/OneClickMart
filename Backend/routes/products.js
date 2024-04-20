const express = require("express");
const { getAllProducts, addProduct } = require("../controllers/products");
const router = express.Router();

router.get("/", getAllProducts);
router.post("/addProduct", addProduct);

module.exports = router;
