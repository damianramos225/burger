var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/burger_controller.js");
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});