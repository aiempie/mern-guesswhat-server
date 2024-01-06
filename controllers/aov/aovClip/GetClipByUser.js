const { response } = require("express");
const AovClip = require("../../../models/aov/AovClip");
const AovScoreSchema = require("../../../models/aov/AovUserScore");

const getAovClipByUser = async (req, res = response) => {
  try {
    const userScore = await AovScoreSchema.findOne({ user_id: req.user._id });

    const takenIds = userScore?.finishClips || [];
    const count = await AovClip.countDocuments({
      _id: { $nin: takenIds || [] },
    });

    const clip = await AovClip.findOne({
      _id: { $nin: takenIds || [] },
    })
      .select("-rank_id")
      .skip(Math.floor(Math.random() * count))
      .exec();

    if (clip) {
      res.json({
        success: true,
        clip: clip,
      });
    } else {
      res.json({
        success: false,
        message: "Bạn đã xem hết clip hiện tại",
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

module.exports = getAovClipByUser;
