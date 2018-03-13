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
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);