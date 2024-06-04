const { getDB } = require("../../../../database/connectDatabase");

const getSingleBrandFromDB = async (req, res) => {
  try {
    const database = getDB();
    const brandsCollection = database.collection("brands");
    const query = {
      name: req.params.brandName,
    };
    const result = await brandsCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSingleBrandFromDB;
