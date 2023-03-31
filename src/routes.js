const journeyController = require('./controllers/journeyController');

module.exports = (app) => {
    app.post('/api/journey/schedule', journeyController.schedule);
}