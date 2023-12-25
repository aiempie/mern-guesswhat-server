const { response } = require("express");
const AovRank = require("../../../models/aov/AovRank");
const aovRankData = require("../../../config/initAovRank");

const createInitAovRank = async (req, res = response) => {
  try {
    // Kiểm tra xem có dữ liệu trong AovRank không
    const existingData = await AovRank.find();

    if (existingData && existingData.length > 0) {
      // Nếu có dữ liệu, xoá toàn bộ
      await AovRank.deleteMany();
      console.log("Đã xoá dữ liệu cũ AovRank.");
    }

    // Thêm dữ liệu từ mảng aovRankData vào cơ sở dữ liệu
    await AovRank.insertMany(aovRankData);
    console.log("Đã thêm dữ liệu khởi tạo AovRank.");

    res.status(201).json({
      success: true,
      message: "Tạo rank thành công",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = createInitAovRank;
