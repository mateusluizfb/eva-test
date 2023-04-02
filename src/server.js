const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();
app.use(bodyParser.json());

try {
  // Log all requests
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
  // Ignore CORS for now
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  routes(app);
  
  app.listen(3001, () => { console.log('Express App Listening on Port 3001') });
} catch (error) {
  console.error(`An error occurred: ${JSON.stringify(error)}`);
  process.exit(1);
}