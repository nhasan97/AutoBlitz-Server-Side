const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const getSingleServiceDetails = async (req, res) => {
  try {
    const database = getDB();
    const servicesCollection = database.collection("services");
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await servicesCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSingleServiceDetails;
