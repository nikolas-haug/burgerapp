//import the orm object
var orm = require("../config/orm.js");

var burger = {
    //select all of the burgers and their data
    selectAll: function(callBack) {
        orm.selectAll(function(res) {
            callBack(res);
        });
    },
    //add a new burger to the db
    insertOne: function(newBurger, callBack) {
        orm.insertOne(newBurger, function(res) {
            callBack(res);
        })
    },
    updateOne: function(eatenBurger, callBack) {
        orm.updateOne(eatenBurger, function(res) {
            callBack(res);
        });
    }
}

module.exports = burger;