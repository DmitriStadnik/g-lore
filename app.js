var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client/build")));

// app.use('/', indexRouter);

// every route not mentioned before goes to the single-page app
app.get('/*', (req, res) => {
  res
    .header('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
