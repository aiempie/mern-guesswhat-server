const { response } = require("express");
const LolQuiz = require("../../../models/lol/LolQuiz");

const createLolQuiz = async (req, res = response) => {
  try {
    let { question, correctAnswer, incorrectAnswers } = req.body;

    // Kiểm tra trùng lặp câu hỏi (nếu cần)
    const existingQuiz = await LolQuiz.findOne({ question });
    if (existingQuiz) {
      return res.status(400).json({
        success: false,
        message: "Câu hỏi đã có sẵn",
      });
    }

    const newLolQuiz = new LolQuiz({
      question,
      correctAnswer,
      incorrectAnswers,
    });

    const savedLolQuiz = await newLolQuiz.save();
    console.log("Đã thêm 1 LOL quiz");

    res.status(201).json({
      success: true,
      message: "Đã thêm LOL quiz thành công",
      data: savedLolQuiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Lỗi máy chủ nội bộ",
    });
  }
};

module.exports = createLolQuiz;
