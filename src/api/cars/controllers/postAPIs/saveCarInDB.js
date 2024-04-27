const { getDB } = require("../../../../database/connectDatabase");

const saveCarInDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");
    const newCar = req.body;
    const result = await carsCollection.insertOne(newCar);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveCarInDB;
