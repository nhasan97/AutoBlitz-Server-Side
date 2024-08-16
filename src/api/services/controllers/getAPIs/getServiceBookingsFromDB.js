const { getDB } = require("../../../../database/connectDatabase");

const getServiceBookingsFromDB = async (req, res) => {
  try {
    const database = getDB();
    const serviceBookingCollection = database.collection("serviceBookings");

    let query = {};
    if (req.query?.email) {
      query = {
        email: req.query?.email,
      };
    }

    const cursor = serviceBookingCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getServiceBookingsFromDB;
