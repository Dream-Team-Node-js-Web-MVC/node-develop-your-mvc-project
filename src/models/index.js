const { User } = require("./userModel");
const { Worker } = require("./workerModel");
const { Product } = require("./productModel");
const { Order } = require("./orderModel");


module.exports = {
  User: User,
  Worker: Worker,
  Product: Product,
  Order: Order,
};
