const PaymentIntent = require("./controllers/postAPIs/PaymentIntent");
const savePaymentDataInDB = require("./controllers/postAPIs/savePaymentDataInDB");

module.exports = {
  PaymentIntent,
  savePaymentDataInDB,
};
