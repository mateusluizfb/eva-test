const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connection
        .on('error', console.log)
        .once('open', () => {
            const info = mongoose.connections[0];
            console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        });

    return mongoose.connect('mongodb://127.0.0.1:27017/mongodb', { useMongoClient: true });
}