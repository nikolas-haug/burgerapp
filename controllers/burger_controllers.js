var express = require("express");
//import burger model
var burger = require("../models/burger.js");
//make the router variable using the express router method
var router = express.Router();

//set up the routes using the express router

//GET ROUTE
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handleBarsObj = {burgers: data}
        res.render("index", handleBarsObj);
    });
});

//POST ROUTE
router.post("/api/burgers", function(req, res) {
    console.log(req.body.burgerName);
    burger.insertOne(req.body.burgerName, function() {
        res.redirect("/");
    });
});

//PUT ROUTE
router.put("/api/burgers/:id", function(req, res) {
    // console.log(req.params.id);
    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});

//DELETE ROUTE
router.delete("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    burger.deleteOne(req.params.id, function() {
        res.redirect("/");
    });
});

module.exports = router;