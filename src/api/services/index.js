const deleteServiceFromDB = require("./controllers/deleteAPIs/deleteServiceFromDB");
const getServicesFromDB = require("./controllers/getAPIs/getServicesFromDB");
const getSingleServiceDetails = require("./controllers/getAPIs/getSingleServiceDetails");
const getServiceBookingsFromDB = require("./controllers/getAPIs/getServiceBookingsFromDB");
const saveServiceBookingsInDB = require("./controllers/postAPIs/saveServiceBookingsInDB");
const saveServiceInDB = require("./controllers/postAPIs/saveServiceInDB");
const updateServiceInfo = require("./controllers/putAPIs/updateServiceInfo");
const updateBookingStatusInDB = require("./controllers/patchAPIs/updateBookingStatusInDB");

module.exports = {
  saveServiceInDB,
  getServicesFromDB,
  getSingleServiceDetails,
  getServiceBookingsFromDB,
  saveServiceBookingsInDB,
  updateServiceInfo,
  deleteServiceFromDB,
  updateBookingStatusInDB,
};
