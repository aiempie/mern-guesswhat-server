const { response } = require("express");
const LolQuiz = require("../../../models/lol/LolQuiz");

const { updateLolScore } = require("../../../utils/updateGameScore");
const { updatePlayCount, updatePlayTime } = require("../../../utils/updatePlayCount");

const lolSubmitQuiz = async (req, res = response) => {
  try {
    let { quiz_id, chooseAnswer } = req.body;

    if (req.user.playCount <= 0) {
      return res.status(200).json({
        success: true,
        plusScore: 0,
        message: "Bạn đã hết lượt chơi! Kiếm thêm lượt chơi để tiếp tục.",
      });
    }

    const Quiz = await LolQuiz.findOne({ _id: quiz_id });
    if (!Quiz) {
      return res.status(403).json({
        success: false,
        message: "Không tìm thấy câu hỏi",
      });
    } else {
      // Thêm clip_id vào finishClips
      await LolUserScore.findOneAndUpdate(
        { user_id: req.user._id },
        {
          $push: { finishQuizs: quiz_id },
        },
        { new: true },
      );
      let plusScore = 0;
      if (Quiz.correctAnswer === chooseAnswer) {
        plusScore = 1;
      } else {
        plusScore = -1;
      }
      // Cập nhật số lượt chơi và trả kết quả
      updateLolScore(req.user._id, plusScore);
      updatePlayCount(req.user._id, req.user.playCount - 1);
      updatePlayTime(req.user._id, 1);
    }
    return res.json({
      success: true,
      plusScore,
      message: getMessage(plusScore),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getMessage = (plusScore) => {
  if (plusScore === 1) {
    return "Bạn đã đoán gần đúng, Bạn được cộng 1 điểm";
  } else {
    return "Bạn đã đoán sai, Bạn bị trừ 1 điểm";
  }
};

module.exports = lolSubmitQuiz;
