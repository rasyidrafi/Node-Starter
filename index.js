const express = require("express");
const app = express();

// Load env
require("dotenv").config();

// Use Public Folder as Resources
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 8987, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
