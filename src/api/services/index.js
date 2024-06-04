const deleteServiceFromDB = require("./controllers/deleteAPIs/deleteServiceFromDB");
const getServicesFromDB = require("./controllers/getAPIs/getServicesFromDB");
const getSingleServiceDetails = require("./controllers/getAPIs/getSingleServiceDetails");
const saveServiceBookingsInDB = require("./controllers/postAPIs/saveServiceBookingsInDB");
const saveServiceInDB = require("./controllers/postAPIs/saveServiceInDB");
const updateServiceInfo = require("./controllers/putAPIs/updateServiceInfo");

module.exports = {
  saveServiceInDB,
  getServicesFromDB,
  getSingleServiceDetails,
  saveServiceBookingsInDB,
  updateServiceInfo,
  deleteServiceFromDB,
};
