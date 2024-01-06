const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  playCount: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["ADMIN", "MOD", "USER"],
    default: "USER",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserSchema);
