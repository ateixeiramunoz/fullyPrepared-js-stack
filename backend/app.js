var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var materialesRouter = require('./routes/materiales');
var Mongoose = require("mongoose");


var app = express();

const {
	  MONGO_USERNAME,
	  MONGO_PASSWORD,
	  MONGO_HOSTNAME,
	  MONGO_PORT,
	  MONGO_DB
	  
	} = process.env;

const options = {
		  useNewUrlParser: true,
		  reconnectTries: 10,
		  reconnectInterval: 500,
		  connectTimeoutMS: 10000,
		};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongo:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


Mongoose.connect(url, options).then( function() {
			console.log('MongoDB is connected');
})
  .catch( 
  function(err) {
  console.log(err);
});
		
		
		
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/materiales', materialesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;

