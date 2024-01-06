const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AovScoreSchema = new Schema({
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
      ref: "aov_clip",
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

module.exports = mongoose.model("aov_user_score", AovScoreSchema);
