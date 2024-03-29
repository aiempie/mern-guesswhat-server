const { response } = require("express");
const AovClip = require("../../../models/aov/AovClip");

const createAovClip = async (req, res = response) => {
  try {
    let { clip_id, rank_id, owner } = req.body;

    // Kiểm tra clip_id
    const existingClip = await AovClip.findOne({ clip_id });
    if (existingClip) {
      return res.status(400).json({
        success: false,
        message: "Clip ID đã có sẵn",
      });
    }

    const newAovClip = new AovClip({
      clip_id,
      rank_id,
      owner,
    });
    const savedAovClip = await newAovClip.save();
    console.log("Đã thêm 1 aov clip");

    res.status(201).json({
      success: true,
      message: "Đã thêm clip thành công",
      data: savedAovClip,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = createAovClip;
