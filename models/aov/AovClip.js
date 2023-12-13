const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AovClipSchema = new Schema({
  clip_id: {
    type: String,
    require: true,
    unique: true,
  },
  rank_id: {
    type: Schema.Types.ObjectId,
    ref: "aov_rank",
  },
  image: {
    type: String,
    require: true,
  },
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

module.exports = mongoose.model("aov_clip", AovClipSchema);
