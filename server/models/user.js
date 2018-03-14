const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  local: {
    username: String,
    password: String,
  },
  facebook: {
    fb_id: String,
    token: String,
    name: String
  },
  google: {
    google_id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    twitter_id: String,
    token: String,
    username: String,
    displayName: String
  }
});

User.plugin(passportLocalMongoose, { usernameField : 'userName' });

module.exports = mongoose.model('User', User);