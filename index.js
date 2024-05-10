var express = require("express");
var ejs = require("ejs");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(8080);

app.get("/", function (req, res) {
  //res.send("Hello");
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

// app.get("/versorteos", function (req, res) {
//   res.send("Boletos disponibles: Tecnologico, Siembra Cultural");
// });
