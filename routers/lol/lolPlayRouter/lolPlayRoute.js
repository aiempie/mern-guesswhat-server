const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const lolSummitClip = require("../../../controllers/lol/lolPlay/LolSummitClip");

const router = express.Router();

router.post("/clip", verifyToken, lolSummitClip);

module.exports = router;
