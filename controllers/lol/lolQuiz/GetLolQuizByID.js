const { response } = require("express");
const LolQuiz = require("../../../models/lol/LolQuiz");

const getLolQuizById = async (req, res = response) => {
  try {
    const quizId = req.params.quizId;

    const quiz = await LolQuiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy LOL quiz",
      });
    }

    res.json({
      success: true,
      quiz: quiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getLolQuizById;
