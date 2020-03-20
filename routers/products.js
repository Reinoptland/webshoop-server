const { Router } = require("express");

// registered as '/products'
const router = new Router();

// GET products
router.get("/", (req, res) => {
  console.log("HI!");
  res.send("HI!");
});

module.exports = router;
