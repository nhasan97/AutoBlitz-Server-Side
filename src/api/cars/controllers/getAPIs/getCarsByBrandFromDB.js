const { getDB } = require("../../../../database/connectDatabase");

const getCarsByBrandFromDB = async (req, res) => {
  try {
    const database = getDB();
    const carsCollection = database.collection("cars");

    let query = {};
    if (req.query?.brandName) {
      query = {
        brandName: {
          $regex: req.query?.brandName,
          $options: "i",
        },
      };
    }

    const cursor = carsCollection.find(query);
    const cars = await cursor.toArray();

    // Find min and max prices using aggregation
    const priceStats = await carsCollection
      .aggregate([
        { $match: query }, // Match the brand name if provided
        {
          $group: {
            _id: null,
            maxPrice: { $max: "$price" },
            minPrice: { $min: "$price" },
          },
        },
      ])
      .toArray();

    // Extract the min and max prices
    const { maxPrice, minPrice } = priceStats[0] || {
      maxPrice: null,
      minPrice: null,
    };

    res.send({ cars, maxPrice, minPrice });
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getCarsByBrandFromDB;
