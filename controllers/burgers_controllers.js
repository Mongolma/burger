//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var burger = require("../models/burger.js");

// Create an instance of our the express app
var app = express();

// Set the port of my application
// process.env.PORT lets the port to be set by Heroku
var PORT = process.env.PORT || 8080;

// Set handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
app.get("/", function (req, res) {
  res.render("burgers", { burgers: burger });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
