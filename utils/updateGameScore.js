const AovUserScore = require("../models/aov/AovUserScore");

const updateAovScore = async (_id, newScore) => {
  try {
    const updateScore = await AovUserScore.findOneAndUpdate(
      { user_id: _id },
      { $inc: { score: newScore } }, // Sử dụng $inc để tăng giá trị của score
      { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
    );
    return updateScore;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateAovScore };
