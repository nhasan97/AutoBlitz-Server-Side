const express = require("express");
const { getAllCustomersFromDB } = require("../../api/customers");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.get("/all-customers", verifyToken, getAllCustomersFromDB);

module.exports = router;
