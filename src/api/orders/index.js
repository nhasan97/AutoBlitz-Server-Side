const getOrdersFromDB = require("./controllers/getAPIs/getOrdersFromDB");
const updateOrderStatusInDB = require("./controllers/patchAPIs/updateOrderStatusInDB");

module.exports = {
  getOrdersFromDB,
  updateOrderStatusInDB,
};
