const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const deleteServiceFromList = async (req, res) => {
  try {
    const database = getDB();
    const serviceListCollection = database.collection("serviceList");
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await serviceListCollection.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = deleteServiceFromList;
