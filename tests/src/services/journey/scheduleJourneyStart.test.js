const mockStartJourney = jest.fn();
jest.doMock('../../../../src/queues/startJourneyQueue', () => ({
    startJourney: mockStartJourney
}));

const scheduleJourneyStart = require('../../../../src/services/journey/scheduleJourneyStart');

describe('scheduleJourneyStart', () => {
    it('should schedule a journey to start', async () => {
        const userId = 'userId';
        const journeyId = 'journeyId';
        const startAt = '2020-01-01T00:00:00.000Z';

        await scheduleJourneyStart({ userId, journeyId, startAt });

        expect(mockStartJourney).toHaveBeenCalledWith({
            userId,
            journeyId,
            startAt: new Date(startAt)
        });
    });
});
