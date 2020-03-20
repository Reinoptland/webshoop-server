const { Router } = require("express");
const Product = require("../models").product;

// registered as '/products'
const router = new Router();

// GET /products
router.get("/", async (req, res) => {
  const allProducts = await Product.findAll();
  console.log("HI!");
  res.status(200).json(allProducts);
});

// POST /products
router.post("/", (req, res) => {
  console.log("HI!");
  res.send("HELLO FROM BACKEND");
});

module.exports = router;
