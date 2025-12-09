const express = require("express")
const { createShortUrl } = require("../controllers/shortner.controller")
const router = express.Router()

router.post("/create", createShortUrl)


module.exports = router