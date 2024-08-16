const express = require("express");
const { getOrdersFromDB, updateOrderStatusInDB } = require("../../api/orders");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.get("/payments", verifyToken, getOrdersFromDB);
router.patch("/orders/update-status/:_id", updateOrderStatusInDB);

module.exports = router;
