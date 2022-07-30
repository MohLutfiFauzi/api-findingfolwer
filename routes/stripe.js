const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = 'sk_test_51KyPjgKxK11znADPPygWLkHqWgS5sgGwPKD0TSBVwfoYkZCLvRCMjIjPeJxn7GlP39lPw3Nje0Z7GyqQgiKwlTdI00FgE0qTqs';
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "idr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
