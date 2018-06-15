var express = require("express");
    bodyParser = require("body-parser");
    exphbs = require("express-handlebars");

//import the exported connection and orm files
var connection = require("./config/connection.js");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//sets up the express app to serve static files
app.use(express.static("public"));

//sets up the express app with handlebars layouts/templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import the router from the controller file
var routes = require("./controllers/burger_controllers.js");
//use the express router for all routes defined in the controller file
app.use("/", routes);

//start the server to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});