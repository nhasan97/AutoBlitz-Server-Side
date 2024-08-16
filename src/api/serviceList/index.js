const getServiceFromList = require("./controllers/getAPIs/getServiceFromList");
const addServiceToList = require("./controllers/postAPIs/addServiceToList");
const deleteServiceFromList = require("./controllers/deleteAPIs/deleteServiceFromList");

module.exports = {
  getServiceFromList,
  addServiceToList,
  deleteServiceFromList,
};
