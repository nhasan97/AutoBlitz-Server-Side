const express = require("express");
const {
  getCartItems,
  addItemToCart,
  deleteItemFromCart,
} = require("../../api/cart");

const router = express.Router();

router.get("/cart", getCartItems);
router.post("/cart", addItemToCart);
router.delete("/cart/:id", deleteItemFromCart);

module.exports = router;
