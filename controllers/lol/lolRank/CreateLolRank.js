const { response } = require("express");
const LolRank = require("../../../models/lol/LolRank");
const lolRankData = require("../../../config/initLolRank");

const createInitLolRank = async (req, res = response) => {
  try {
    // Kiểm tra xem có dữ liệu trong LolRank không
    const existingData = await LolRank.find();

    if (existingData && existingData.length > 0) {
      // Nếu có dữ liệu, xoá toàn bộ
      await LolRank.deleteMany();
      console.log("Đã xoá dữ liệu cũ LolRank.");
    }

    // Thêm dữ liệu từ mảng lolRankData vào cơ sở dữ liệu
    await LolRank.insertMany(lolRankData);
    console.log("Đã thêm dữ liệu khởi tạo LolRank.");

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

module.exports = createInitLolRank;
