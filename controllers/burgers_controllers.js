var express = require('express');
let burg = require('../models/burger.js');
var router = express.Router();
var path = require('path');

router.get("/", function(req, res) {
    res.json(path.join(__dirname, "../views/index.handlebars"))
}); 

router.get('/burgers', function(req, res) {
    res.json("Testing");
});

module.exports = router;