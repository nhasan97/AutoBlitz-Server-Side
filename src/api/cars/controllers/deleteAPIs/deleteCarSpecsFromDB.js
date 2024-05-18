const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const deleteCarSpecsFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carCollection = database.collection("carDetails");
    const name = req.params.name;
    const query = { name: name };
    const result = await carCollection.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = deleteCarSpecsFromDB;
