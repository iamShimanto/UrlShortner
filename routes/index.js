const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const shortnerRoute = require("./shortner.route");
const { redirectUrl } = require("../controllers/shortner.controller");

router.get("/", (req, res) => {
  res.send("server is running");
});

router.use("/api/auth", userRoute);
router.use("/api/url", shortnerRoute)
router.get("/:id", redirectUrl)

router.use((req, res) => {
  res.send("404 page not found");
});

module.exports = router;
