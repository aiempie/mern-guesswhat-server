const { response } = require("express");
const LolClip = require("../../../models/lol/LolClip");

const createLolClip = async (req, res = response) => {
  try {
    let { clip_id, rank_id, owner } = req.body;

    // Kiểm tra clip_id
    const existingClip = await LolClip.findOne({ clip_id });
    if (existingClip) {
      return res.status(400).json({
        success: false,
        message: "Clip ID đã có sẵn",
      });
    }

    const newLolClip = new LolClip({
      clip_id,
      rank_id,
      owner,
    });

    const savedLolClip = await newLolClip.save();
    console.log("Đã thêm 1 lol clip");

    res.status(201).json({
      success: true,
      message: "Đã thêm clip thành công",
      data: savedLolClip,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = createLolClip;
