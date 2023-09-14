const healthCheck = async (req, res) => {
  return res.status(200).json({
    success: true,
    status: "Up",
  });
};

module.exports = healthCheck;
