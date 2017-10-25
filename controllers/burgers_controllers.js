var express = require('express');
let burg = require('../models/burger.js');
var connection = require('../config/connection.js');
var router = express.Router();
var path = require('path'); 

router.get('/', function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }
        //res.json(data);
        res.render("index", { burgers: data });
      });
    });

router.post("/", function(req, res) {
    res.render('You sent, ' + req.body.burger_name);
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) throw err;
    
        res.redirect("/");
      });
    });

module.exports = router;