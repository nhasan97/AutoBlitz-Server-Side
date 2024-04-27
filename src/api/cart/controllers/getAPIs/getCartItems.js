const { getDB } = require("../../../../database/connectDatabase");

const getCartItems = async (req, res) => {
  try {
    const database = getDB();
    const cartCollection = database.collection("cart");
    const cursor = cartCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCartItems;
