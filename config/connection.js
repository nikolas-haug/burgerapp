var mysql = require("mysql");

// Set up our connection information
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
}

// Connect to the database
connection.connect();

//export the connection
module.exports = connection;