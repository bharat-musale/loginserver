const mysql = require("mysql")

const connection = mysql.createConnection({
  user: "root",
  password: "manager",
  host: "localhost",
  port: 3306,
  database: "awesome_db",
})

connection.connect()
console.log("Database is connected...");
module.exports = connection
