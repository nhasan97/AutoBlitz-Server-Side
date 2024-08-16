const { getDB } = require("../../../../database/connectDatabase");

const getOrdersFromDB = async (req, res) => {
  try {
    const database = getDB();
    const paymentCollection = database.collection("payments");

    let query = {};
    if (req.query?.email) {
      query = {
        email: req.query?.email,
      };
    }

    const cursor = paymentCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getOrdersFromDB;
