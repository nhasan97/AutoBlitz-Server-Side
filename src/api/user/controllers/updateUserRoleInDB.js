// const Users = require("../../../schemas/Users");

const updateUserRoleInDB = async (req, res) => {
  try {
    // const email = req.params.email;
    // const user = req.body;
    // const query = { email: email };
    // const option = { upsert: true };
    // const updatedDoc = {
    //   $set: { ...user, timeStamp: Date.now() },
    // };
    // const result = await Users.updateOne(query, updatedDoc, option);
    // return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateUserRoleInDB;
