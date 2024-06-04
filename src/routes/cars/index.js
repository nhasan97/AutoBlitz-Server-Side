const express = require("express");
const {
  getCarsByBrandFromDB,
  getSingleCarDetails,
  getPopularMakesFromDB,
  saveCarInDB,
  updateCarInfo,
  deleteCarDataFromDB,
} = require("../../api/cars");

const router = express.Router();

router.get("/cars", getCarsByBrandFromDB);
router.get("/all-cars/:id", getSingleCarDetails);
router.get("/popular-makes", getPopularMakesFromDB);
router.post("/cars", saveCarInDB);
router.patch("/all-cars/:id", updateCarInfo);
router.delete("/delete-car/:id", deleteCarDataFromDB);

module.exports = router;
