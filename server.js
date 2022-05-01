require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

// routes
app.get("/", (req, res) => {
  res.send("Home");
});
app.use("/user", require("./routes/userRouter"));

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 6000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

// connect to mongodb
mongoose
  .connect(URL)
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("App is listen http://localhost:" + PORT));
