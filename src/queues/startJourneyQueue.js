const Queue = require('bull');
const runJourneySteps = require('../services/journey/runJourneySteps');

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

const startJourneyQueue = new Queue('startJourneyQueue', REDIS_URL);

const startJourney = ({ userId, journeyId, startAt }) => {
    return startJourneyQueue.add({
        userId,
        journeyId,
    }, {
        delay: startAt.getTime() - Date.now(),
    });
}

module.exports = {
    process: () => {
        startJourneyQueue.process((job) => {
            console.log('Processing startJourneyQueue job', job.data);

            return runJourneySteps(job.data);
        });
    },
    startJourney,
};