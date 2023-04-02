const journeyController = require('./controllers/journeyController');
const userController = require('./controllers/userController');

module.exports = (app) => {
    app.post('/api/journey/schedule', journeyController.schedule);
    app.get('/api/journeys', journeyController.getJourneys);
    app.get('/api/users', userController.getUsers);
}