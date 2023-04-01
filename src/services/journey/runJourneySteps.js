const { Journey } = require('../../model');
const { getStepByName } = require('./steps');

const runJourneySteps = async ({ userId, journeyId }) => {
    try {
        const journey = await Journey.findOne({ _id: journeyId }).exec()

        if (!journey) {
            throw new Error('Journey not found');
        }

        return journey.steps
            .map(({ name }) => getStepByName(name))
            .filter(step => step)
            .map(step => step.run({ userId }));
    } catch (e) {
        console.error(e);
        throw e;
    }


};

module.exports = runJourneySteps;
