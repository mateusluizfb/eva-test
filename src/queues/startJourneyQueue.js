const Queue = require('bull');

const startJourneyQueue = new Queue('startJourneyQueue', 'redis://default:iAPx8GZDX186M9niP7yiD2nrK7Y6lpZn@redis-12589.c114.us-east-1-4.ec2.cloud.redislabs.com:12589');

const startJourney = ({ userId, journeyId, startTime }) => {
    return startJourneyQueue.add({
        userId,
        journeyId,
    }, {
        delay: startTime.getTime() - Date.now(),
    });
}

module.exports = {
    process: () => {
        startJourneyQueue.process(async (job) => {
            console.log('Processing startJourneyQueue job', job.data);
        });
    },
    startJourney,
};