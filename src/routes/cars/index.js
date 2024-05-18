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
  deleteCarDataFromDB,
  deleteCarSpecsFromDB,
} = require("../../api/cars");

const router = express.Router();

router.get("/cars", getCarsByBrandFromDB);
router.get("/all-cars/:id", getSingleCarDetails);
router.get("/car-specs/:name", getCarSpecsFromDB);
router.get("/popular-makes", getPopularMakesFromDB);
router.post("/cars", saveCarInDB);
router.post("/car-details", saveCarSpecsInDB);
router.patch("/all-cars/:id", updateCarInfo);
router.patch("/car-specs/:name", updateCarSpecs);
router.delete("/delete-car/:id", deleteCarDataFromDB);
router.delete("/delete-car-specs/:name", deleteCarSpecsFromDB);

module.exports = router;
