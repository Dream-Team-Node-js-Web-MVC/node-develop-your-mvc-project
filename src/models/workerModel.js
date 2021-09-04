const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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
      type: String,
      enum: ["employee", "admin"],
    },
    profileImage: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

WorkerSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = bcrypt.hashSync(this.password, 12);
    return next();
  } catch (error) {
    return next(error);
  }
});

WorkerSchema.methods.comparePassword = function comparePassword(pass) {
  return bcrypt.compare(pass, this.password);
};

const Worker = mongoose.model("Worker", WorkerSchema);

module.exports = {
  Worker: Worker,
};
