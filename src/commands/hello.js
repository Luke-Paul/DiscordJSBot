const COmmand = require('./../Structures/Command.js');

module.exports = class extends COmmand {

    constructor(...args) {
        super(...args, {
            aliases: ['hi']
        })
    }

    async run(message, args) {
        message.channel.send('Hello');
    }
};