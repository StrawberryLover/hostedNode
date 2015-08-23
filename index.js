'use strict';

var express  = require('express'),
  app        = express(),
  http       = require('http'),
  path       = require("path"),
  fs         = require("fs"),
  port       = (process.env.PORT || 8080);

app.use(express.bodyParser());

// routes 
require('./routes/cookie.js')(app);

// launch 
app.listen(port);

console.log('The magic happens on port ' + port);