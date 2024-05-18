const saveUserDataInDB = require("./controllers/saveUserDataInDB");
const getUserDataFromDB = require("./controllers/getUserDataFromDB");
const updateUserRoleInDB = require("./controllers/updateUserRoleInDB");

module.exports = {
  saveUserDataInDB,
  getUserDataFromDB,
  updateUserRoleInDB,
};
