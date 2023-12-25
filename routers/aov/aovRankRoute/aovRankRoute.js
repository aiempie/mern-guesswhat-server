const express = require("express");
const verifyToken = require("../../../middleware/checkToken");
const checkAdmin = require("../../../middleware/checkAdmin");
const createInitAovRank = require("../../../controllers/aov/aovRank/CreateAovRank");
const getAllAovRank = require("../../../controllers/aov/aovRank/GetAovRanks");

const router = express.Router();

router.post("/initial", verifyToken, checkAdmin, createInitAovRank);
router.get("/", getAllAovRank);

module.exports = router;
