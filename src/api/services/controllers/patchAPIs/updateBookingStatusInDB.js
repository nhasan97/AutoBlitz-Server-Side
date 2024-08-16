const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const updateBookingStatusInDB = async (req, res) => {
  try {
    const database = getDB();
    const serviceBookingCollection = database.collection("serviceBookings");

    const query = { _id: new ObjectId(req.params._id) };
    const status = req.body;

    const updatedDoc = {
      $set: { ...status },
    };
    const result = serviceBookingCollection.updateOne(query, updatedDoc);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateBookingStatusInDB;
