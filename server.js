var express = require('express');
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');