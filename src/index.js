const BlueNinjarClient = require('./Structures/BlueNinjarClient');
const config = require('../config.json');

const client = new BlueNinjarClient(config);
client.start();