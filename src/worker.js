const { startJourneyQueue } = require('./queues');

console.log('Starting worker');

startJourneyQueue.process();