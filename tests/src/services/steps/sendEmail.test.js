const sendEmail = require('../../../../src/services/journey/steps/sendEmail');

describe('sendEmail', () => {
    it('has a name', () => {
        expect(sendEmail.name).toBe('sendEmail');
    });
    
    it('has a run function', () => {
        expect(sendEmail.run).toBeInstanceOf(Function);
    });
});