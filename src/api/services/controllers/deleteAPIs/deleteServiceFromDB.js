const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const deleteServiceFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carCollection = database.collection("services");
    const id = req.params._id;
    console.log(id);
    const query = { _id: new ObjectId(id) };
    const result = await carCollection.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = deleteServiceFromDB;
