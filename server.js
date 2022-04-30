require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

app.get("/", (req, res) => {
  res.send("Home");
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

// connect to mongodb

app.listen(3000, () => console.log("App is listen 3000"));
