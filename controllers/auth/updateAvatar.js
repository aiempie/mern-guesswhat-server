const { response } = require("express");
const User = require("../../models/user/User");

const updateAvatar = async (req, res = response) => {
  const { image } = req.body;
  if (!image) {
    return res.status(400).json({
      success: false,
      message: "Không tìm thấy ảnh",
    });
  }
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { image: image }, { new: true });
    res.status(201).json({
      success: true,
      message: "Cập nhật Avatar thành công!",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = updateAvatar;
