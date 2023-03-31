const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());

try {
  db();

  routes(app);
  
  app.listen(3001, () => { console.log('Express App Listening on Port 3001') });
} catch (error) {
  console.error(`An error occurred: ${JSON.stringify(error)}`);
  process.exit(1);
}