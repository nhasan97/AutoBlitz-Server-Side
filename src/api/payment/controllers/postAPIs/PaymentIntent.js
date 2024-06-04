require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRATE_KEY);

const PaymentIntent = async (req, res) => {
  const { price } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "usd",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = PaymentIntent;
