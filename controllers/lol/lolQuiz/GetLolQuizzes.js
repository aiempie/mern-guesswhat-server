const { response } = require("express");
const LolQuiz = require("../../../models/lol/LolQuiz");

// Khi gọi API, truyền page và limit qua query parameters. Ví dụ: /api/lol-quiz?page=1&limit=10.
const getLolQuizs = async (req, res = response) => {
  try {
    const { page = 1, limit = 10, sort = "createAt", order = "desc" } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {
        [sort]: order === "desc" ? -1 : 1,
      },
    };

    const quizs = await LolQuiz.paginate({}, options);

    res.json({
      success: true,
      data: quizs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getLolQuizs;
