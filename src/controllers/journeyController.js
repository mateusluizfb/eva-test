const scheduleJourneyStart = require('../services/journey/scheduleJourneyStart');

module.exports = {
    schedule: (req, res) => {
        const { userId, journeyId, startAt } = req.body;

        if (!userId || !journeyId || !startAt) {
            return res.status(400).json({
                error: 'Missing required fields'
            })
        }

        // Schedule the journey to start at the specified time
        scheduleJourneyStart({
            userId,
            journeyId,
            startAt
        });

        return res.status(200).json({ message: 'Journey scheduled to start' })
    }
}
