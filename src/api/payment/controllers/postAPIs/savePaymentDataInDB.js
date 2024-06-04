const { getDB } = require("../../../../database/connectDatabase");

const savePaymentDataInDB = async (req, res) => {
  try {
    const database = getDB();
    const paymentCollection = database.collection("payments");
    const payment = { ...req.body, timeStamp: Date.now() };
    console.log(payment);
    const result = await paymentCollection.insertOne(payment);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = savePaymentDataInDB;
