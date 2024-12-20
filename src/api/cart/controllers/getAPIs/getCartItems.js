const { getDB } = require("../../../../database/connectDatabase");

const getCartItems = async (req, res) => {
  try {
    // if (req.user.email !== req.query.email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    const database = getDB();
    const cartCollection = database.collection("cart");
    const query = {
      user_email: req.params.email,
    };
    const cursor = cartCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCartItems;
