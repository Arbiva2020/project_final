// we need a model that allowes us to work with the specific entity of the database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("project_users", userSchema);
