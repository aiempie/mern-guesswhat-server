const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paginate = require("mongoose-paginate-v2");

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
  owner: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

AovClipSchema.plugin(paginate);

module.exports = mongoose.model("aov_clip", AovClipSchema);
