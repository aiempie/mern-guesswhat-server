const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AovRankSchema = new Schema({
  rankName: {
    type: String,
    require: true,
    unique: true,
  },
  rankLevel: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("aov_rank", AovRankSchema);
