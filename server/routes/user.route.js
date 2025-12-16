const express = require("express");
const {
  registerUser,
  userLogin,
  getProfile,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
