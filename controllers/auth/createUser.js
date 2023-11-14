const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const generateJWT = require("../../helpers/jwt");

const createUser = async (req, res = response) => {
  let { username, password, email, fullname, image } = req.body;
  // check validate
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Thiếu tài khoản và/hoặc mật khẩu!",
    });
  }
  if (!email || !fullname) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin tài khoản!",
    });
  }
  try {
    // Search user
    const user = await User.findOne({ username: { $regex: new RegExp(username, "i") } });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Tài khoản này đã được sử dụng!",
      });
    }

    // encrypt password
    const salt = bcrypt.genSaltSync();
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new User({ username, password: hashPass, email, fullname, image });
    //save user
    await newUser.save();

    // generate token with JWT
    const token = await generateJWT(newUser._id, newUser.username);
    res.json({
      success: true,
      message: "Tài khoản được tạo thành công!",
      accessToken: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi máy chủ nội bộ!",
    });
  }
};

module.exports = createUser;
