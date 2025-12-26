const express = require("express");
const {
  registerUser,
  userLogin,
  getProfile,
  logOut,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/logout", authMiddleware, logOut)
router.get("/profile", authMiddleware, getProfile);


module.exports = router;
