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

render.post("/", function(req, res) {
    res.send('You sent, ' + req.body.task);
    connection.query("INSERT INTO burgers (task) VALUES (?)", [req.body.task], function(err, result) {
        if (err) throw err;
    
        res.redirect("/");
      });
    });

module.exports = router;