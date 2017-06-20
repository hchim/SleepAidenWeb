var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var index = require('./routes/index');

var app = express();

// view engine setup
var hbs = exphbs.create({
    path: 'views',
    defaultLayout: 'default',
    extname: '.hbs',
    helpers: {
        /**
         * The {{#exists}} helper checks if a variable is defined.
         */
        exists: function(variable, options) {
            if (typeof variable !== 'undefined') {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {'title': "Error", 'error': err});
});

module.exports = app;
