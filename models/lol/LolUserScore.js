const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LolScoreSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  score: {
    type: Number,
    default: 0,
  },
  finishClips: [
    {
      type: Schema.Types.ObjectId,
      ref: "lol_clip",
    },
  ],
  finishQuizs: [
    {
      type: Schema.Types.ObjectId,
      ref: "lol_quiz",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateBy: {
    type: String,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("lol_user_score", LolScoreSchema);
