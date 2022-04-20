const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("database connected");
});

//init routes as middleware
app.use(express.json());
app.use(cors());
app.use("/api", routesUrls);
app.listen(4000, () => console.log("server is running"));

module.exports = app;
