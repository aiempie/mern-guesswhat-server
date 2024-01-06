const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const checkMod = require("../../../middleware/checkMod");
const createAovClip = require("../../../controllers/aov/aovClip/CreateAovClip");
const getAovClips = require("../../../controllers/aov/aovClip/GetAovClips");
const getAovClipById = require("../../../controllers/aov/aovClip/GetAovClipByID");
const getAovClipByUser = require("../../../controllers/aov/aovClip/GetClipByUser");

const router = express.Router();

router.post("/", verifyToken, checkMod, createAovClip);
router.get("/clips", verifyToken, getAovClips);
router.get("/clip", verifyToken, getAovClipByUser);
router.get("/:clipId", verifyToken, getAovClipById);

module.exports = router;
