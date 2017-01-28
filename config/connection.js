// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "healthFewdDB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;



// var Sequelize = require("sequelize");

// 
// in routes (controller): connected to Sequelize:
//
// Chirp.findAll
//
// ^findAll is refering to sequalize
