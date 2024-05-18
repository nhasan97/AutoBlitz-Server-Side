const express = require("express");
const {
  getCartItems,
  addItemToCart,
  deleteItemFromCart,
} = require("../../api/cart");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.get("/cart/:email", verifyToken, getCartItems);
router.post("/cart", verifyToken, addItemToCart);
router.delete("/delete-cart-item/:id", verifyToken, deleteItemFromCart);

module.exports = router;
