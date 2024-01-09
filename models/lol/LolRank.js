const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LolRankSchema = new Schema({
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

module.exports = mongoose.model("lol_rank", LolRankSchema);
