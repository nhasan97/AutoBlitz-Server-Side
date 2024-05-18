const getCarsByBrandFromDB = require("./controllers/getAPIs/getCarsByBrandFromDB");
const getSingleCarDetails = require("./controllers/getAPIs/getSingleCarDetails");
const getCarSpecsFromDB = require("./controllers/getAPIs/getCarSpecsFromDB");
const getPopularMakesFromDB = require("./controllers/getAPIs/getPopularMakesFromDB");
const saveCarInDB = require("./controllers/postAPIs/saveCarInDB");
const saveCarSpecsInDB = require("./controllers/postAPIs/saveCarSpecsInDB");
const updateCarInfo = require("./controllers/putAPIs/updateCarInfo");
const updateCarSpecs = require("./controllers/putAPIs/updateCarSpecs");
const deleteCarDataFromDB = require("./controllers/deleteAPIs/deleteCarDataFromDB");
const deleteCarSpecsFromDB = require("./controllers/deleteAPIs/deleteCarSpecsFromDB");

module.exports = {
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
};
