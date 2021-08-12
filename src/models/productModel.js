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
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    images: [
      {
        url: String,
      },
    ],
  },
  { timestamp: true },
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product: Product,
};
