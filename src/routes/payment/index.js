const express = require("express");
const {
  PaymentIntent,
  savePaymentDataInDB,
  getPaymentDataFromDb,
} = require("../../api/payment");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/create-payment-intent", PaymentIntent);

router.post("/payments", verifyToken, savePaymentDataInDB);

router.get("/payments", verifyToken, getPaymentDataFromDb);

module.exports = router;
