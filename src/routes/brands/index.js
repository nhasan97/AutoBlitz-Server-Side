const express = require("express");
const { getBrandsFromDB, getSingleBrandFromDB } = require("../../api/brands");

const router = express.Router();

router.get("/brands", getBrandsFromDB);
router.get("/single-brand/:brandName", getSingleBrandFromDB);

module.exports = router;
