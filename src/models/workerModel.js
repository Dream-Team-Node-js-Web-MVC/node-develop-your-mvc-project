const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const WorkerSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      validate: {
        validator: (value) => isEmail[value],
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    permissions: {
      type: {
        type: String,
        enum: ["editor", "admin"],
      },
    },
    password: String,
  },
  { timestamp: true },
);

const Worker = mongoose.model("Worker", WorkerSchema);

module.exports = {
  Worker: Worker,
};
