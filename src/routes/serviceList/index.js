const express = require("express");
const {
  getServiceFromList,
  addServiceToList,
  deleteServiceFromList,
} = require("../../api/serviceList");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.get("/serviceList/:email", verifyToken, getServiceFromList);
router.post("/serviceList", addServiceToList);
router.delete(
  "/delete-serviceList-item/:id",

  deleteServiceFromList
);

module.exports = router;
