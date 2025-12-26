require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

dbConfig();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
  })
);

app.set("trust proxy", true);

app.use(routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
