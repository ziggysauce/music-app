const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');

// const passportLocalMongoose = require('passport-local-mongoose');

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

// User.plugin(passportLocalMongoose, { usernameField : 'userName' });

// generating a hash
User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);