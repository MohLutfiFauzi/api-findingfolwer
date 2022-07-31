const mongoose = require("mongoose");
const dateNow = new Date();

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    stock: [
      {
        stockQuantity: {
          type: Number,
        },
        suplier: {
          type: String,
          default: "mang maman",
        },
        numberPhone: {
          type: String,
        },
        createdAt: {
          type: String,
          default: dateNow,
        },
      },
    ],
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
