const express = require("express");
const {
  saveUserDataInDB,
  getUserDataFromDB,
  updateUserRoleInDB,
} = require("../../api/user");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.put("/users/:email", verifyToken, saveUserDataInDB);

router.get("/users", verifyToken, getUserDataFromDB);

router.put("/users/update-role/:email", verifyToken, updateUserRoleInDB);

module.exports = router;
