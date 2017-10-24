var express = require('express');
let burg = require('../models/burger.js');
var router = express.Router();


router.get('/burgers', function(req, res) {
    res.json("Testing");
});

module.exports = router;