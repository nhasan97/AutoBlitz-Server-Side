const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const savePaymentDataInDB = async (req, res) => {
  try {
    const database = getDB();
    const paymentCollection = database.collection("payments");
    const cartCollection = database.collection("cart");
    const payment = { ...req.body.payment, timeStamp: Date.now() };
    const result = await paymentCollection.insertOne(payment);
    const query = {
      _id: { $in: req.body.cartCarIds.map((id) => new ObjectId(id)) },
    };
    const clearCart = await cartCollection.deleteMany(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = savePaymentDataInDB;
