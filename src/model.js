const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

const Journey = mongoose.model('Journey', {
  name: String,
  description: String,
  start: Date,
  end: Date, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = {
  User,
  Journey
};
