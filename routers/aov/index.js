// aovRoutes.js
const express = require("express");
const router = express.Router();

const aovRankRoutes = require("./aovRankRoute/aovRankRoute");
const aovClipRoutes = require("./aovClipRoute/aovClipRoute");
const aovPlay = require("./aovPlayRouter/aovPlayRoute");

router.use("/rank", aovRankRoutes);
router.use("/clip", aovClipRoutes);
router.use("/play", aovPlay);

module.exports = router;
