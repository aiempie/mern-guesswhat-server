const User = require("../models/user/User");

const updatePlayCount = async (_id, newPlayCount) => {
  try {
    const updatedTimesUser = await User.findByIdAndUpdate(
      _id,
      { playCount: newPlayCount },
      { new: true },
    );
    if (updatedTimesUser) {
      return updatedTimesUser;
    } else {
      throw new Error("Không tìm thấy user với id " + _id);
    }
  } catch (error) {
    console.log(error);
  }
};

const updatePlayTime = async (_id, newPlayTime) => {
  try {
    const updatedTimesUser = await User.findByIdAndUpdate(
      _id,
      { $inc: { playTime: newPlayTime } },
      { new: true },
    );
    if (updatedTimesUser) {
      return updatedTimesUser;
    } else {
      throw new Error("Không tìm thấy user với id " + _id);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updatePlayCount, updatePlayTime };
