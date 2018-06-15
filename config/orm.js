//import the connection to the db
var connection = require("./connection.js");

//create the orm object with its methods
var orm = {
    selectAll: function(callBack) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    },
    insertOne: function(newBurger, callBack) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)",[newBurger], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    },
    updateOne: function(burgerID, callBack) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",[burgerID], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    }
}

module.exports = orm;