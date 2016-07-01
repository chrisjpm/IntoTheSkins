var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var hbs = require('express-hbs')

var index = require('./routes/index')
var deposit = require('./routes/deposit')
var about = require('./routes/about')
var auction = require('./routes/auction')
var profile = require('./routes/profile')
var settings = require('./routes/settings')
var support = require('./routes/support')
var submitticket = require('./routes/submitticket')
var tickets = require('./routes/tickets')
var viewticket = require('./routes/viewticket')
var admin = require('./routes/admin')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layout.hbs'),
  partialsDir: path.join(__dirname, '/views/partials')
})
)

app.use('/', index)
app.use('/deposit', deposit)
app.use('/about', about)
app.use('/auction', auction)
app.use('/profile', profile)
app.use('/settings', settings)
app.use('/support', support)
app.use('/submitticket', submitticket)
app.use('/tickets', tickets)
app.use('/viewticket', viewticket)
app.use('/admin', admin)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
