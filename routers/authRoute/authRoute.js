const express = require("express");
const createUser = require("../../controllers/auth/createUser");
const loginUser = require("../../controllers/auth/loginUser");
const verifyToken = require("../../middleware/checkToken");
const loadUser = require("../../controllers/auth/loadUser");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/loaduser", verifyToken, loadUser);

module.exports = router;
