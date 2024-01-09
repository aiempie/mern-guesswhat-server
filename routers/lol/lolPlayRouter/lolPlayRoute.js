const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const lolSummitClip = require("../../../controllers/lol/lolPlay/LolSummitClip");
const lolTopScore = require("../../../controllers/lol/lolPlay/LolTopScore");

const router = express.Router();

router.post("/clip", verifyToken, lolSummitClip);
router.get("/chart", lolTopScore);

module.exports = router;
