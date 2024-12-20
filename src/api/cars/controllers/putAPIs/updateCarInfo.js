const { ObjectId } = require("mongodb");
const { getDB } = require("../../../../database/connectDatabase");

const updateCarInfo = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedInfo = {
      $set: {
        name: req.body.name,
        brandName: req.body.brandName,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
        imageUrl: req.body.imageUrl,
        body: req.body.body,
        seg: req.body.seg,
        py: req.body.py,
        eng: req.body.eng,
        pow: req.body.pow,
        fuel: req.body.fuel,
        fuelc: req.body.fuelc,
        ps: req.body.ps,
        d: req.body.d,
        ts: req.body.ts,
        gw: req.body.gw,
      },
    };

    const option = { upsert: true };

    const result = await carsCollection.updateOne(filter, updatedInfo, option);

    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateCarInfo;
