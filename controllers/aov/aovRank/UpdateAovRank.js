const { response } = require("express");
const AovRank = require("../../../models/aov/AovRank");

const updateAovRank = async (req, res = response) => {
  const { _id, rankName, rankLevel, image } = req.body;

  if (!_id || !rankName || !image) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin của rank!",
    });
  }

  try {
    const existingRank = await AovRank.findOne({ _id: { $ne: _id }, rankName });

    if (existingRank) {
      return res.status(401).json({
        success: false,
        message: "Không thể sử dụng tên rank này!",
      });
    }

    const updatedRank = await AovRank.findByIdAndUpdate(
      _id,
      {
        rankName,
        rankLevel,
        image,
      },
      { new: true },
    );

    res.status(201).json({
      success: true,
      message: "Cập nhật thông tin rank thành công!",
      rank: updatedRank,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = updateAovRank;
