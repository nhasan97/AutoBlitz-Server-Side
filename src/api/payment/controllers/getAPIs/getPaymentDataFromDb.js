const { getDB } = require("../../../../database/connectDatabase");

const getPaymentDataFromDb = async (req, res) => {
  try {
    const database = getDB();
    const paymentCollection = database.collection("payments");
    const cursor = paymentCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getPaymentDataFromDb;
