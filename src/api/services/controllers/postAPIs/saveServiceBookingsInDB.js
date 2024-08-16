const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const saveServiceBookingsInDB = async (req, res) => {
  try {
    const database = getDB();
    const serviceBookingCollection = database.collection("serviceBookings");
    const serviceListCollection = database.collection("serviceList");
    const booking = { ...req.body.booking, timeStamp: Date.now() };
    const result = await serviceBookingCollection.insertOne(booking);
    const query = {
      _id: { $in: req.body.listServiceIds.map((id) => new ObjectId(id)) },
    };
    const clearList = await serviceListCollection.deleteMany(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveServiceBookingsInDB;
