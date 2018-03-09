const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  location: String,
  owner: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  }
});

module.exports = mongoose.model('Profile', profileSchema);