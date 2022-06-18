var express = require("express");
var bodyParser = require('body-parser')
var router = express.Router();
var mysql = require("mysql");

// Connectiong to our local database
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'remoterehabdb'

});



router.get("/", function (req, res, next) {
  const sqlInsert = "SELECT * FROM patients;"
  db.query(sqlInsert, (err, result) => {
    console.log(result);
  })
  res.send("Kari, Ole, Morgan") //TODO send the patients list to the client
});
module.exports = router;