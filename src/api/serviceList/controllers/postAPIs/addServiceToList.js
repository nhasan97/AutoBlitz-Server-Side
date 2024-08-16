const { getDB } = require("../../../../database/connectDatabase");

const addServiceToList = async (req, res) => {
  try {
    // if (req.user.email !== req.query.email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const database = getDB();
    const serviceListCollection = database.collection("serviceList");
    const loadedProductInServiceList = req.body;
    const result = await serviceListCollection.insertOne(
      loadedProductInServiceList
    );
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = addServiceToList;
