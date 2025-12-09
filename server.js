require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes");
const { isUrlValid } = require("./utils/validator");
const { generateRandomString } = require("./utils/generate");

dbConfig();

app.use(express.json());


app.use(routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
