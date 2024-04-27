const { getDB } = require("../../../../database/connectDatabase");

const deleteItemFromCart = async (req, res) => {
  try {
    const database = getDB();
    const cartCollection = database.collection("cart");
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await cartCollection.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = deleteItemFromCart;
