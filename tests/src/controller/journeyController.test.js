jest.doMock('../../../src/config/db');
jest.doMock('../../../src/services/journey/scheduleJourneyStart', () => jest.fn());

const journeyController = require('../../../src/controllers/journeyController');
const scheduleJourneyStart = require('../../../src/services/journey/scheduleJourneyStart');

describe('Journey Controller', () => {
    it('should schedule a journey to start', async () => {
        const req = {
            body: {
                userId: 'userId',
                journeyId: 'journeyId',
                startAt: 'startAt'
            }
        };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };

        debugger

        await journeyController.schedule(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Journey scheduled to start'
        });
        expect(scheduleJourneyStart).toHaveBeenCalledWith({
            userId: 'userId',
            journeyId: 'journeyId',
            startAt: 'startAt'
        });
    });
});