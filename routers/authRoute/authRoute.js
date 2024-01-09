const express = require("express");
const createUser = require("../../controllers/auth/createUser");
const loginUser = require("../../controllers/auth/loginUser");
const verifyToken = require("../../middleware/checkToken");
const loadUser = require("../../controllers/auth/loadUser");
const checkMod = require("../../middleware/checkMod");
const getUserById = require("../../controllers/auth/GetUserById");
const updateAvatar = require("../../controllers/auth/updateAvatar");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/loaduser", verifyToken, loadUser);
router.get("/loadadmin", verifyToken, checkMod, loadUser);
router.put("/", verifyToken, updateAvatar);
router.get("/:id", getUserById);

module.exports = router;
