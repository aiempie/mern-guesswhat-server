const { response } = require("express");
const AovRank = require("../../../models/aov/AovRank");

const deleteMultiAovRank = async (req, res = response) => {
  const { rankIds } = req.body;

  if (!rankIds) {
    return res.status(400).json({
      success: false,
      message: "Thiếu danh sách ID của rank!",
    });
  }

  try {
    const delAovRank = await AovRank.deleteMany({ _id: { $in: rankIds } });

    if (delAovRank.deletedCount === 0) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy rank để xoá!",
      });
    }

    res.status(201).json({
      success: true,
      message: `Đã xoá ${delAovRank.deletedCount} rank thành công!`,
      deletedAovRanks: delAovRank,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = deleteMultiAovRank;
