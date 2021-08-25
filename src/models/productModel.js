const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    price: {
      type: [{ pack: Number, packPrice: Number }],
      require: true,
    },
    stock: Number,
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product: Product,
};
