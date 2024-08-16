const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const updateOrderStatusInDB = async (req, res) => {
  try {
    const database = getDB();
    const paymentCollection = database.collection("payments");

    const query = { _id: new ObjectId(req.params._id) };
    const status = req.body;

    const updatedDoc = {
      $set: { ...status },
    };
    const result = paymentCollection.updateOne(query, updatedDoc);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateOrderStatusInDB;
