const { getDB } = require("../../../../database/connectDatabase");

const getCarSpecsFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("carDetails");
    const name = req.params.name;
    const query = { name: name };
    const result = await carsCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCarSpecsFromDB;
