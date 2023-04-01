// require all steps in the folder and return one given a name:

const fs = require('fs');

const steps = fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .map(file => require(`./${file}`));

module.exports = {
    getStepByName: name => steps.find(step => step.name === name)
};