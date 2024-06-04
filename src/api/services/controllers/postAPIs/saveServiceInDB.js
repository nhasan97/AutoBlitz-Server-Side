const { getDB } = require("../../../../database/connectDatabase");

const saveServiceInDB = async (req, res) => {
  try {
    const database = getDB();
    const serviceCollection = database.collection("services");
    const service = req.body;
    const result = await serviceCollection.insertOne(service);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveServiceInDB;
