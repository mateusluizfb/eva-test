const startJourneyQueue = require('../../queues/startJourneyQueue');

const scheduleJourneyStart = ({ userId, journeyId, startAt }) => {
    return startJourneyQueue.startJourney({
        userId,
        journeyId,
        startAt: new Date(startAt)
    })
}

module.exports = scheduleJourneyStart;