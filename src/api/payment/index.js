const PaymentIntent = require("./controllers/postAPIs/PaymentIntent");
const savePaymentDataInDB = require("./controllers/postAPIs/savePaymentDataInDB");
const getPaymentDataFromDb = require("./controllers/getAPIs/getPaymentDataFromDb");

module.exports = {
  PaymentIntent,
  savePaymentDataInDB,
  getPaymentDataFromDb,
};
