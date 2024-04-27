const express = require("express");
const { getBrandsFromDB } = require("../../api/brands");

const router = express.Router();

router.get("/brands", getBrandsFromDB);

module.exports = router;
