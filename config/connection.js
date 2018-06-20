var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});


// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export the connection
module.exports = connection;