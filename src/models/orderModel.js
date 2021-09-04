const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    userData: {
      type: Object,
      //   required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      //   required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = {
  Order: Order,
};
