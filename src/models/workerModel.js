const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const WorkerSchema = new Schema(
  {
    fullName: {
      type: String,
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
    password: String,
    role: {
      type: {
        type: String,
        enum: ["employee", "admin"],
      },
    },
    profileImage: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

const Worker = mongoose.model("Worker", WorkerSchema);

module.exports = {
  Worker: Worker,
};
