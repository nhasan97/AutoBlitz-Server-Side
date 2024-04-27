const { getDB } = require("../../../../database/connectDatabase");

const getBrandsFromDB = async (req, res) => {
  try {
    const database = getDB();
    const brandsCollection = database.collection("brands");
    const cursor = brandsCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getBrandsFromDB;
