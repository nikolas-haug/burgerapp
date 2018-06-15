var express = require("express");
//import burger model
var burger = require("../models/burger.js");
//make the router variable using the express router method
var router = express.Router();

//set up the routes using the express router
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handleBarsObj = {burgers: data}
        res.render("index", handleBarsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burgerName);
    burger.insertOne(req.body.burgerName, function() {
        res.redirect("/");
    });
});

// TO DO - - - - FIX THIS 

router.put("/api/burgers/:id", function(req, res) {
    
        res.redirect("/");
        
});

module.exports = router;