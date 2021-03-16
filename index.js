const express = require("express");
const app = express();

// Load env
require("dotenv").config();

// Use Public Folder as Resources
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// Home
app.get("/", async (req, res) => {
  res.render("home.html");
});

app.get("/second", async (req, res) => {
  let angka = Math.floor(Math.random() * Math.floor(99));
  res.render("second.html", { angkaFront: angka });
});

const listener = app.listen(process.env.PORT || 8987, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
