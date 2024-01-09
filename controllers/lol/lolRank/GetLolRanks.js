const { response } = require("express");
const LolRank = require("../../../models/lol/LolRank");

const getAllLolRank = async (req, res = response) => {
  try {
    const ranks = await LolRank.find().sort({ rankLevel: 1 });

    res.json({
      success: true,
      listRanks: ranks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getAllLolRank;
