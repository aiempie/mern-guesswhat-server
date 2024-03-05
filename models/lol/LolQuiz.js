const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paginate = require("mongoose-paginate-v2");

const LolQuizSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  incorrectAnswers: {
    type: Array,
    default: [],
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

LolQuizSchema.plugin(paginate);

module.exports = mongoose.model("lol_quiz", LolQuizSchema);
