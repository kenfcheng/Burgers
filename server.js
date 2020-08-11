const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//////////////////////////////////////////////////////////////////////////
// Sets Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//////////////////////////////////////////////////////////////////
// Imports routes from burgers_controller.js
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//////////////////////////////////////////////////////////////////
// Server listens to client request
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});

console.log("node process: " + process.env.NODE_ENV);
