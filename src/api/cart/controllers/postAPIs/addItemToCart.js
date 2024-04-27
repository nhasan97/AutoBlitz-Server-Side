const { getDB } = require("../../../../database/connectDatabase");

const addItemToCart = async (req, res) => {
  try {
    const database = getDB();
    const cartCollection = database.collection("cart");
    const loadedProductInCart = req.body;
    const result = await cartCollection.insertOne(loadedProductInCart);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = addItemToCart;
