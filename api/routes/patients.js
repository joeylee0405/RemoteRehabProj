var express = require("express");
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
  res.send("this is the patients side")
});
module.exports = router;