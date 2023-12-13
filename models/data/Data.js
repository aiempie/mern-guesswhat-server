const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Data = new Schema({
  key: {
    type: String,
    require: true,
    unique: true,
  },
  value: {
    type: Object,
  },
});

module.exports = mongoose.model("aov_clip", Data);
