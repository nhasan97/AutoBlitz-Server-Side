const { getDB } = require("../../../../database/connectDatabase");

const getCarsByBrandFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");

    let query = {};
    if (req.query?.brandName) {
      query = { brandName: req.query.brandName.toLowerCase() };
    }

    const cursor = carsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCarsByBrandFromDB;
