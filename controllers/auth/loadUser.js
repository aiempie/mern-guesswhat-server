const { response } = require("express");

const loadUser = async (req, res = response) => {
  return res.json({
    success: true,
    user: req.user,
  });
};

module.exports = loadUser;
