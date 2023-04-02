const mockModel = jest.fn();
jest.doMock('../../../../src/model', () => ({ Journey: mockModel }));

const mockGetStepByName = jest.fn();
jest.doMock('../../../../src/services/journey/steps', () => ({ getStepByName: mockGetStepByName }));

const runJourneySteps = require('../../../../src/services/journey/runJourneySteps');

describe('runJourneySteps', () => {
    it('should run all steps of a journey', async () => {
        const userId = 'userId';
        const journeyId = 'journeyId';

        mockModel.findOne = jest.fn(() => ({
            exec: () => ({
                steps: [
                    { name: 'step1' },
                    { name: 'step2' }
                ]
            })
        }));    

        mockRunStep = jest.fn();
        mockGetStepByName.mockImplementation(() => ({
            run: mockRunStep
        }));

        await runJourneySteps({ userId, journeyId });

        expect(mockGetStepByName).toHaveBeenCalledWith('step1');
        expect(mockGetStepByName).toHaveBeenCalledWith('step2');
        expect(mockRunStep).toHaveBeenCalledWith({ userId });
        expect(mockRunStep).toHaveBeenCalledTimes(2);
    });

    it('should not run steps that are not found', async () => {
        const userId = 'userId';
        const journeyId = 'journeyId';

        mockModel.findOne = jest.fn(() => ({
            exec: () => ({
                steps: [
                    { name: 'step1' },
                    { name: 'step2' }
                ]
            })
        }));    

        mockRunStep = jest.fn();
        mockGetStepByName.mockImplementation(() => null);

        await runJourneySteps({ userId, journeyId });

        expect(mockGetStepByName).toHaveBeenCalledWith('step1');
        expect(mockGetStepByName).toHaveBeenCalledWith('step2');
        expect(mockRunStep).not.toHaveBeenCalled();
    });

    it('should throw an error if journey is not found', async () => {
        const userId = 'userId';
        const journeyId = 'journeyId';

        mockModel.findOne = jest.fn(() => ({
            exec: () => null
        }));    

        expect(runJourneySteps({ userId, journeyId })).rejects.toThrow('Journey not found');
    });
});
