const sendWhatsapp = require('../../../../src/services/journey/steps/sendWhatsapp');

describe('sendWhatsapp', () => {
    it('has a name', () => {
        expect(sendWhatsapp.name).toBe('sendWhatsapp');
    });

    it('has a run function', () => {
        expect(sendWhatsapp.run).toBeInstanceOf(Function);
    });
});