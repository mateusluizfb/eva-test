const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DB_URL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mongodb';

module.exports = () => {
    mongoose.connection
        .on('error', console.log)
        .once('open', () => {
            const info = mongoose.connections[0];
            console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        });

    return mongoose.connect(DB_URL, { useMongoClient: true });
}