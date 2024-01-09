const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paginate = require("mongoose-paginate-v2");

const LolClipSchema = new Schema({
  clip_id: {
    type: String,
    require: true,
    unique: true,
  },
  rank_id: {
    type: Schema.Types.ObjectId,
    ref: "lol_rank",
  },
  owner: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

LolClipSchema.plugin(paginate);

module.exports = mongoose.model("lol_clip", LolClipSchema);
