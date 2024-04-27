const { getDB } = require("../../../../database/connectDatabase");

const updateCarSpecs = async (req, res) => {
  try {
    const database = getDB();
    const carsDetailsCollection = database.collection("carDetails");
    const name = req.params.name;
    const filter = { name: name };
    const updatedInfo = {
      $set: {
        name: req.body.name,
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

    const result = await carsDetailsCollection.updateOne(
      filter,
      updatedInfo,
      option
    );

    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateCarSpecs;
