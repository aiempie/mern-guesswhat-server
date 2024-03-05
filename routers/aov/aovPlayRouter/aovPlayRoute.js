const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const aovSubmitClip = require("../../../controllers/aov/aovPlay/AovSubmitClip");
const aovTopScore = require("../../../controllers/aov/aovPlay/AovTopScore");

const router = express.Router();

router.post("/clip", verifyToken, aovSubmitClip);
router.get("/chart", aovTopScore);

module.exports = router;
