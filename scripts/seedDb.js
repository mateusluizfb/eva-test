const { User, Journey } = require('../src/model');
seed();

async function seed() {
    // Clean up
    await User.deleteMany({});
    await Journey.deleteMany({});

    // Seed data
    const user = new User({
        name: 'John Doe',
        email: 'john@email.com',
    });

    await user.save();

    const journey = new Journey({
        name: 'My Journey',
        description: 'My first journey',
        steps: [
            {
                name: 'sendEmail',
                description: 'Send email'
            },
            {
                name: 'sendWhatsapp',
                description: 'Send whatsapp'
            }
        ]
    });

    await journey.save();

    console.log(`UserId: ${user._id}`);
    console.log(`JourneyId: ${journey._id}`);
}
