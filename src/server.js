const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();
app.use(bodyParser.json());

try {
  routes(app);
  
  app.listen(3001, () => { console.log('Express App Listening on Port 3001') });
} catch (error) {
  console.error(`An error occurred: ${JSON.stringify(error)}`);
  process.exit(1);
}