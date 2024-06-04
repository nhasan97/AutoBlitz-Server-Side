const express = require("express");
const applyMiddleware = require("./src/middleWares/applyMiddlewares");
const { connectDatabase } = require("./src/database/connectDatabase");
require("dotenv").config();

const app = express();
const port = 5000 || process.env.PORT;

const authenticationRoutes = require("./src/routes/authentication/index");
const usersRoutes = require("./src/routes/users/index");
const customerRoutes = require("./src/routes/customer/index");
const brandRoutes = require("./src/routes/brands/index");
const carsRoutes = require("./src/routes/cars/index");
const servicesRoutes = require("./src/routes/services/index");
const cartRoutes = require("./src/routes/cart/index");
const paymentRoutes = require("./src/routes/payment/index");

const globalErrorHandler = require("./src/middleWares/globalErrorHandler");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(usersRoutes);
app.use(customerRoutes);
app.use(brandRoutes);
app.use(carsRoutes);
app.use(servicesRoutes);
app.use(cartRoutes);
app.use(paymentRoutes);

app.get("/", (req, res) => {
  res.send("server started");
});

app.all("*", (req, res, next) => {
  const err = new Error(`requested url [${req.url}] is invalid`);
  err.status = 404;
  next(err);
});

app.use(globalErrorHandler);

const main = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
};

main();
