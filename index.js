const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ygecibd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("automotiveDB");

    app.get("/brands", async (req, res) => {
      const brandsCollection = database.collection("brands");
      const cursor = brandsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/cars/:brand_name", async (req, res) => {
      const carsCollection = database.collection("cars");
      const brandName = req.params.brand_name;
      const query = { brandName: brandName.toLowerCase() };
      const cursor = carsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/all-cars/:id", async (req, res) => {
      const carsCollection = database.collection("cars");
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await carsCollection.findOne(query);
      res.send(result);
    });

    app.get("/car-features/:name", async (req, res) => {
      const carsCollection = database.collection("carDetails");
      const name = req.params.name;
      const query = { name: name };
      const result = await carsCollection.findOne(query);
      res.send(result);
    });

    app.get("/cart", async (req, res) => {
      const cartCollection = database.collection("cart");
      const cursor = cartCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.delete("/cart/:id", async (req, res) => {
      const cartCollection = database.collection("cart");
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/cars", async (req, res) => {
      const carsCollection = database.collection("cars");
      const newCar = req.body;
      const result = await carsCollection.insertOne(newCar);
      res.send(result);
    });

    app.post("/cart", async (req, res) => {
      const cartCollection = database.collection("cart");
      const loadedProductInCart = req.body;
      const result = await cartCollection.insertOne(loadedProductInCart);
      res.send(result);
    });

    app.put("/all-cars/:id", async (req, res) => {
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
        },
      };

      const option = { upsert: true };

      const result = await carsCollection.updateOne(
        filter,
        updatedInfo,
        option
      );

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
