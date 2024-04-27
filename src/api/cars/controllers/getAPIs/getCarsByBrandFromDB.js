const { getDB } = require("../../../../database/connectDatabase");

const getCarsByBrandFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");
    const brandName = req.params.brand_name;
    const query = { brandName: brandName.toLowerCase() };
    const cursor = carsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCarsByBrandFromDB;
