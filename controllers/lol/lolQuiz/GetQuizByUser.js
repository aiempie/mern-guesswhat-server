const { response } = require("express");
const LolQuiz = require("../../../models/lol/LolQuiz");
const LolScoreSchema = require("../../../models/lol/LolUserScore");

const getLolQuizByUser = async (req, res = response) => {
  try {
    const userScore = await LolScoreSchema.findOne({ user_id: req.user._id });

    const takenIds = userScore?.finishQuizzes || [];
    const count = await LolQuiz.countDocuments({
      _id: { $nin: takenIds || [] },
    });

    const quiz = await LolQuiz.findOne({
      _id: { $nin: takenIds || [] },
    })
      .skip(Math.floor(Math.random() * count))
      .exec();

    if (quiz) {
      const allAnswer = [...quiz.incorrectAnswers, quiz.correctAnswer].sort(
        () => Math.random() - 0.5,
      );
      res.json({
        success: true,
        quiz: { _id: quiz._id, question: quiz.question, answer: allAnswer },
      });
    } else {
      res.json({
        success: false,
        message: "Bạn đã hoàn thành tất cả các câu hỏi hiện tại!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getLolQuizByUser;
