const AovUserScore = require("../models/aov/AovUserScore");
const LolUserScore = require("../models/lol/LolUserScore");

const updateAovScore = async (_id, newScore) => {
  try {
    const updateScore = await AovUserScore.findOneAndUpdate(
      { user_id: _id },
      {
        $inc: { score: newScore }, // Sử dụng $inc để tăng giá trị của score
        $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
      },
      { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
    );
    return updateScore;
  } catch (error) {
    console.log(error);
  }
};

const updateLolScore = async (_id, newScore) => {
  try {
    const updateScore = await LolUserScore.findOneAndUpdate(
      { user_id: _id },
      {
        $inc: { score: newScore }, // Sử dụng $inc để tăng giá trị của score
        $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
      },
      { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
    );
    return updateScore;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateAovScore, updateLolScore };
