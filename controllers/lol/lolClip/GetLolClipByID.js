const { response } = require("express");
const LolClip = require("../../../models/lol/LolClip");

const getLolClipById = async (req, res = response) => {
  try {
    const clipId = req.params.clipId;

    const clip = await LolClip.findById(clipId);

    if (!clip) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy clip",
      });
    }

    res.json({
      success: true,
      clip: clip,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getLolClipById;
