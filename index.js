const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const shipping = require("./routes/shipping");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connection Succesfull"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/checkout", stripeRoute);
app.use("/api/v1/shipping", shipping);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
