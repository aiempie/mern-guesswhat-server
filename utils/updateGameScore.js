const AovUserScore = require("../models/aov/AovUserScore");
const LolUserScore = require("../models/lol/LolUserScore");

const updateAovScore = async (_id, newScore) => {
  try {
    if (newScore >= 0) {
      const updateScore = await AovUserScore.findOneAndUpdate(
        { user_id: _id },
        {
          $inc: { score: newScore }, // Sử dụng $inc để tăng giá trị của score
          $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
        },
        { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
      );
      return updateScore;
    } else {
      let insScore = 0;
      const updateScore = await AovUserScore.findOne({ user_id: _id });
      if (updateScore && updateScore.score + newScore > 0) {
        insScore = updateScore + newScore;
      }
      const res = await AovUserScore.findOneAndUpdate(
        { user_id: _id },
        {
          score: insScore,
          $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
        },
        { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
      );
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateLolScore = async (_id, newScore) => {
  try {
    if (newScore >= 0) {
      const updateScore = await LolUserScore.findOneAndUpdate(
        { user_id: _id },
        {
          $inc: { score: newScore }, // Sử dụng $inc để tăng giá trị của score
          $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
        },
        { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
      );
      return updateScore;
    } else {
      let insScore = 0;
      const updateScore = await LolUserScore.findOne({ user_id: _id });
      if (updateScore && updateScore.score + newScore > 0) {
        insScore = updateScore + newScore;
      }
      const res = await LolUserScore.findOneAndUpdate(
        { user_id: _id },
        {
          score: insScore,
          $set: { updateAt: new Date() }, // Sử dụng $set để thiết lập giá trị mới
        },
        { new: true, upsert: true }, // upsert: true để tạo mới nếu không tìm thấy
      );
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateAovScore, updateLolScore };
