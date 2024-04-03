const mongoose = require("mongoose");

const UsersScema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("User", UsersScema);
module.exports = UsersModel;
