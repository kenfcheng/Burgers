const express = require("express");
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//////////////////////////////////////////////////////////////////////////
// Sets Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//////////////////////////////////////////////////////////////////
// Imports routes from burger_controller.js
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

//////////////////////////////////////////////////////////////////
// Server listens to client request
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});

console.log("node process: " + process.env.NODE_ENV);
// console.log("process.env:", process.env);
