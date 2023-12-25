const { response } = require("express");
const AovRank = require("../../../models/aov/AovRank");

const getAllAovRank = async (req, res = response) => {
  try {
    const ranks = await AovRank.find();

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

module.exports = getAllAovRank;
