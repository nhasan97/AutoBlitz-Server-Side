const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const getSingleCarDetails = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await carsCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSingleCarDetails;
