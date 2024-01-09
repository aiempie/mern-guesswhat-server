const { response } = require("express");
const LolClip = require("../../../models/lol/LolClip");
const LolScoreSchema = require("../../../models/lol/LolUserScore");

const getLolClipByUser = async (req, res = response) => {
  try {
    const userScore = await LolScoreSchema.findOne({ user_id: req.user._id });

    const takenIds = userScore?.finishClips || [];
    const count = await LolClip.countDocuments({
      _id: { $nin: takenIds || [] },
    });

    const clip = await LolClip.findOne({
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

module.exports = getLolClipByUser;
