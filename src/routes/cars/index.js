const express = require("express");
const {
  getCarsByBrandFromDB,
  getSingleCarDetails,
  getCarSpecsFromDB,
  getPopularMakesFromDB,
  saveCarInDB,
  saveCarSpecsInDB,
  updateCarInfo,
  updateCarSpecs,
} = require("../../api/cars");

const router = express.Router();

router.get("/cars/:brand_name", getCarsByBrandFromDB);
router.get("/all-cars/:id", getSingleCarDetails);
router.get("/car-specs/:name", getCarSpecsFromDB);
router.get("/popular-makes", getPopularMakesFromDB);
router.post("/cars", saveCarInDB);
router.post("/car-details", saveCarSpecsInDB);
router.post("/all-cars/:id", updateCarInfo);
router.post("/car-specs/:name", updateCarSpecs);

module.exports = router;
