const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const updateServiceInfo = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("services");
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedInfo = {
      $set: {
        serviceName: req.body.serviceName,
        servicePhoto: req.body.servicePhoto,
        servicePrice: req.body.servicePrice,
        serviceDescription: req.body.serviceDescription,
        facilities: req.body.facilities,
      },
    };

    const option = { upsert: true };

    const result = await carsCollection.updateOne(filter, updatedInfo, option);

    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateServiceInfo;
