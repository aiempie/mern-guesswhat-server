const { response } = require("express");
const LolRank = require("../../../models/lol/LolRank");

const deleteMultiLolRank = async (req, res = response) => {
  const { rankIds } = req.body;

  if (!rankIds) {
    return res.status(400).json({
      success: false,
      message: "Thiếu danh sách ID của rank!",
    });
  }

  try {
    const delLolRank = await LolRank.deleteMany({ _id: { $in: rankIds } });

    if (delLolRank.deletedCount === 0) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy rank để xoá!",
      });
    }

    res.status(201).json({
      success: true,
      message: `Đã xoá ${delLolRank.deletedCount} rank thành công!`,
      deletedLolRanks: delLolRank,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = deleteMultiLolRank;
