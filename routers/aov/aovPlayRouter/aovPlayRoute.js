const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const aovSummitClip = require("../../../controllers/aov/aovPlay/AovSummitClip");
const aovTopScore = require("../../../controllers/aov/aovPlay/AovTopScore");

const router = express.Router();

router.post("/clip", verifyToken, aovSummitClip);
router.get("/chart", aovTopScore);

module.exports = router;
