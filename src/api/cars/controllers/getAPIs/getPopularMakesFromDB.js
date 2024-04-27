const { getDB } = require("../../../../database/connectDatabase");

const getPopularMakesFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");
    // const query = { rating: { $range: [4.5, 5] } };
    const query = { rating: { $gte: 4, $lte: 5 } };
    const cursor = carsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getPopularMakesFromDB;
