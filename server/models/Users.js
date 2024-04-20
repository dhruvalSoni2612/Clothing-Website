const mongoose = require("mongoose");

const UsersScema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("user", UsersScema);
module.exports = UsersModel;
