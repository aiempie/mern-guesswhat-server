const { response } = require("express");
const AovClip = require("../../../models/aov/AovClip");

//Khi gọi API, truyền page và limit qua query parameters. Ví dụ: /api/aov-clip?page=1&limit=10.
const getAovClips = async (req, res = response) => {
  try {
    const { page = 1, limit = 10, sort = "createAt", order = "desc" } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {
        [sort]: order === "desc" ? -1 : 1,
      },
    };

    const clips = await AovClip.paginate({}, options);

    res.json({
      success: true,
      data: clips,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getAovClips;
