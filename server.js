require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
