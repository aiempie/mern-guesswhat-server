const { response } = require("express");
const User = require("../../models/user/User");
const AovUserScore = require("../../models/aov/AovUserScore");

const getUserById = async (req, res = response) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy User này",
      });
    }
    const result = {
      success: true,
      user: user,
    };

    const aovUserScore = await AovUserScore.findOne({ user_id: userId }).select("-finishClips");
    if (aovUserScore) {
      result.aovScore = aovUserScore;
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getUserById;
