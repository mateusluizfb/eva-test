const { startJourneyQueue } = require('../queues');

module.exports = {
    schedule: (req, res) => {
        const { userId, journeyId, startTime } = req.body;

        if (!userId || !journeyId || !startTime) {
            return res.status(400).json({
                error: 'Missing required fields'
            })
        }

        // Schedule the journey to start at the specified time
        startJourneyQueue.startJourney({
            userId,
            journeyId,
            startTime: new Date(startTime)
        });

        return res.status(200).json({ message: 'Journey scheduled to start' })
    }
}
