const { getDB } = require("../../../database/connectDatabase");

const getUserDataFromDB = async (req, res) => {
  try {
    // if (req.user.email !== req.query.email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const database = getDB();
    const usersCollection = database.collection("users");
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }
    const result = await usersCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getUserDataFromDB;
