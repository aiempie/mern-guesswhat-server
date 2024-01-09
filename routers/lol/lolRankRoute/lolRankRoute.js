const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const checkAdmin = require("../../../middleware/checkAdmin");
const getAllLolRank = require("../../../controllers/lol/lolRank/GetLolRanks");
const createInitLolRank = require("../../../controllers/lol/lolRank/CreateLolRank");

const router = express.Router();

router.post("/initial", verifyToken, checkAdmin, createInitLolRank);
router.get("/", getAllLolRank);

module.exports = router;
