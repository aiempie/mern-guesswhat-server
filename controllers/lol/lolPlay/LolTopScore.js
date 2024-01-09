const { response } = require("express");
const User = require("../../../models/user/User");
const LolUserScore = require("../../../models/lol/LolUserScore");

const lolTopScore = async (req, res = response) => {
  try {
    const topScores = await LolUserScore.find().sort({ score: -1 }).limit(10);

    if (topScores) {
      const listUser = await Promise.all(
        topScores.map(async (item) => {
          const user = await User.findById(item.user_id);
          return { score: item.score, name: user.fullname, image: user.image };
        }),
      );
      res.json({
        success: true,
        topScores: listUser,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = lolTopScore;
