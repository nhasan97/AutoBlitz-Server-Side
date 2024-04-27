const { getDB } = require("../../../../database/connectDatabase");

const saveCarSpecsInDB = async (req, res) => {
  try {
    const database = getDB();
    const carsDetailsCollection = database.collection("carDetails");
    const specs = req.body;
    const result = await carsDetailsCollection.insertOne(specs);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveCarSpecsInDB;
