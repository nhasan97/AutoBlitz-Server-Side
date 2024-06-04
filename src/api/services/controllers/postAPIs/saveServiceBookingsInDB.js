const { getDB } = require("../../../../database/connectDatabase");

const saveServiceBookingsInDB = async (req, res) => {
  try {
    const database = getDB();
    const serviceBookingCollection = database.collection("serviceBookings");
    const booking = req.body;
    const result = await serviceBookingCollection.insertOne(booking);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveServiceBookingsInDB;
