const { Router } = require("express");
const Product = require("../models").product;
const authMiddleWare = require("../auth/middleware");

// registered as '/products'
const router = new Router();

// GET /products
router.get("/", async (req, res) => {
  const allProducts = await Product.findAll();
  console.log("HI!");
  res.status(200).json(allProducts);
});

// POST /products
router.post("/", authMiddleWare, async (req, res) => {
  //   console.log("WHAT IS REQ.BODY?", req.body);
  const newProduct = await Product.create(req.body);
  //   console.log(newProduct.dataValues);
  res.status(201).send({ message: "Product Created", product: newProduct });
});

module.exports = router;
