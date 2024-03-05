const { response } = require("express");
const AovClip = require("../../../models/aov/AovClip");
const AovRank = require("../../../models/aov/AovRank");
const AovUserScore = require("../../../models/aov/AovUserScore");

const { updateAovScore } = require("../../../utils/updateGameScore");
const { updatePlayCount, updatePlayTime } = require("../../../utils/updatePlayCount");

const aovSubmitClip = async (req, res = response) => {
  try {
    let { clip_id, level } = req.body;

    if (req.user.playCount <= 0) {
      return res.status(200).json({
        success: true,
        plusScore: 0,
        message: "Bạn đã hết lượt chơi! Kiếm thêm lượt chơi để tiếp tục.",
      });
    }

    const Clip = await AovClip.findOne({ _id: clip_id });
    if (!Clip) {
      return res.status(403).json({
        success: false,
        message: "Không tìm thấy clip",
      });
    }
    const rankClip = await AovRank.findOne({
      _id: Clip.rank_id,
    });

    let plusScore = 0;
    if (rankClip.rankLevel == level) {
      plusScore = 3;
    } else if (rankClip.rankLevel - level == 1 || rankClip.rankLevel - level == -1) {
      plusScore = 1;
    } else {
      plusScore = -2;
    }

    // Thêm clip_id vào finishClips
    if (plusScore) {
      await AovUserScore.findOneAndUpdate(
        { user_id: req.user._id },
        {
          $push: { finishClips: clip_id },
        },
        { new: true },
      );
    }

    // Cập nhật số lượt chơi và trả kết quả
    updateAovScore(req.user._id, plusScore);
    updatePlayCount(req.user._id, req.user.playCount - 1);
    updatePlayTime(req.user._id, 1);

    return res.json({
      success: true,
      plusScore,
      message: getMessage(plusScore),
      rankClip,
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
  if (plusScore === 3) {
    return "Bạn đã đoán chính xác, Bạn được cộng 3 điểm";
  } else if (plusScore === 1) {
    return "Bạn đã đoán gần đúng, Bạn được cộng 1 điểm";
  } else {
    return "Bạn đã đoán sai, Bạn bị trừ 2 điểm";
  }
};

module.exports = aovSubmitClip;
