const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const lolSubmitClip = require("../../../controllers/lol/lolPlay/LolSubmitClip");
const lolTopScore = require("../../../controllers/lol/lolPlay/LolTopScore");
const lolSubmitQuiz = require("../../../controllers/lol/lolPlay/LolSubmitQuiz");

const router = express.Router();

router.post("/clip", verifyToken, lolSubmitClip);
router.post("/quiz", verifyToken, lolSubmitQuiz);
router.get("/chart", lolTopScore);

module.exports = router;
