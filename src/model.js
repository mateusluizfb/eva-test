const mongoose = require('mongoose');
const dbConfig = require('./config/db');
dbConfig()

var Schema = mongoose.Schema;

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

const Steps = new Schema({
  name: String,
  description: String,
});

const Journey = mongoose.model('Journey', {
  name: String,
  description: String,
  steps: [Steps]
});

module.exports = {
  User,
  Journey,
};
