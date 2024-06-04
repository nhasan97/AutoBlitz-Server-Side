const getCarsByBrandFromDB = require("./controllers/getAPIs/getCarsByBrandFromDB");
const getSingleCarDetails = require("./controllers/getAPIs/getSingleCarDetails");
const getPopularMakesFromDB = require("./controllers/getAPIs/getPopularMakesFromDB");
const saveCarInDB = require("./controllers/postAPIs/saveCarInDB");
const updateCarInfo = require("./controllers/putAPIs/updateCarInfo");
const deleteCarDataFromDB = require("./controllers/deleteAPIs/deleteCarDataFromDB");

module.exports = {
  getCarsByBrandFromDB,
  getSingleCarDetails,
  getPopularMakesFromDB,
  saveCarInDB,
  updateCarInfo,
  deleteCarDataFromDB,
};
