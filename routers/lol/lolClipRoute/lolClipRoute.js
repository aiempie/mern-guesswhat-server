const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const checkMod = require("../../../middleware/checkMod");
const createLolClip = require("../../../controllers/lol/lolClip/CreateLolClip");
const getLolClips = require("../../../controllers/lol/lolClip/GetLolClips");
const getLolClipByUser = require("../../../controllers/lol/lolClip/GetClipByUser");
const getLolClipById = require("../../../controllers/lol/lolClip/GetLolClipByID");

const router = express.Router();

router.post("/", verifyToken, checkMod, createLolClip);
router.get("/clips", verifyToken, getLolClips);
router.get("/clip", verifyToken, getLolClipByUser);
router.get("/:clipId", verifyToken, getLolClipById);

module.exports = router;
