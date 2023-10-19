const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
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
      console.log(brandName);
      const query = { brandName: brandName.toLowerCase() };
      const cursor = carsCollection.find(query);
      result = await cursor.toArray();
      res.send(result);
    });

    app.post("/cars", async (req, res) => {
      //   console.log(req.body);
      const carsCollection = database.collection("cars");
      const newCar = req.body;
      const result = await carsCollection.insertOne(newCar);
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