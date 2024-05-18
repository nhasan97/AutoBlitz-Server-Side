const { getDB } = require("../../../../database/connectDatabase");

const getAllCustomersFromDB = async (req, res) => {
  try {
    // if (req.user.email !== req.query.email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const database = getDB();
    const brandsCollection = database.collection("users");
    const query = { role: "customer" };
    const cursor = brandsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getAllCustomersFromDB;
