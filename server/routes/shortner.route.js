const express = require("express");
const {
  createShortUrl,
  getAllUrl,
} = require("../controllers/shortner.controller");
const {
  isAuthenticate,
  authMiddleware,
} = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/create", isAuthenticate, createShortUrl);
router.get("/get-all-url", authMiddleware, getAllUrl);

module.exports = router;
