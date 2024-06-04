const express = require("express");
const verifyToken = require("../../middleWares/verifyToken");
const {
  saveServiceInDB,
  getServicesFromDB,
  getSingleServiceDetails,
  saveServiceBookingsInDB,
  deleteServiceFromDB,
  updateServiceInfo,
} = require("../../api/services");

const router = express.Router();

router.post("/services", verifyToken, saveServiceInDB);
router.get("/services", getServicesFromDB);
router.get("/services/:id", getSingleServiceDetails);
router.post("/service-bookings", saveServiceBookingsInDB);
router.patch("/services/:id", updateServiceInfo);
router.delete("/delete-service/:_id", verifyToken, deleteServiceFromDB);

module.exports = router;
