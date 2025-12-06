const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");

router.get("/", (req, res) => {
  res.send("server is running");
});

router.use("/api/auth", userRoute);

router.use((req, res) => {
  res.send("404 page not found");
});

module.exports = router;
