const express = require("express");
const { createShortUrl } = require("../controllers/shortner.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/create", authMiddleware, createShortUrl);

module.exports = router;
