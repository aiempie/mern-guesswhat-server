// aovRoutes.js
const express = require("express");
const router = express.Router();

const lolRankRoutes = require("./lolRankRoute/lolRankRoute");
const lolClipRoutes = require("./lolClipRoute/lolClipRoute");
const lolPlay = require("./lolPlayRouter/lolPlayRoute");

router.use("/rank", lolRankRoutes);
router.use("/clip", lolClipRoutes);
router.use("/play", lolPlay);

module.exports = router;
