const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path
require('dotenv').config();
require('dotenv').load();
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Require routes & models
const router = require('./routes/index');
const User = require('./models/user');

const app = express();
// const PORT = 5000;
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true })); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client'))); // joins current path with client path
app.use(bodyParser.json()); // looks for JSON data
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors()); // cors middleware for auth

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/music_app"
mongoose.connect(url);

// Passport Config
app.use(require('express-session')({
  secret: 'dtn made this',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
// Passport for local, google, and facebook
require("./passport/passport")(passport);

app.use('/routes', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// start app on specified port
app.listen(PORT, (err) => {
  if (err) { 
    console.log('There was an error connecting to the server', err); 
  }
  else { 
    console.log('You have connected to the server on PORT: ', PORT); 
  }
});

module.exports = app;