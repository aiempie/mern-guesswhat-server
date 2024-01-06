const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const aovSummitClip = require("../../../controllers/aov/aovPlay/AovSummitClip");

const router = express.Router();

router.post("/clip", verifyToken, aovSummitClip);

module.exports = router;
