require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes")

dbConfig()

app.use(express.json());

app.use(routes)


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
  