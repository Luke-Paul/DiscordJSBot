const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['server', 'status', 'mindful']
        });
    }

    // eslint-disable-next-line no-unused-vars
    async run(client, message, args) {
        var request = require("request");
        var mcIP = "Mindful.mc.gg";
        var url = "https://mcapi.us/server/status?ip=" + mcIP + "&port=2200";

        request(url, function (err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            var status = `Mindful is Offline :( Dialing Tech Support: <@244012080468983808> <@260943886648737792>`;
            if (body.online) {
                status = `Mindful is Online!!`;
            } else {
                client.users.cache.get('244012080468983808').send('Reported Mindful is Offline');
                client.users.cache.get('260943886648737792').send('Reported Mindful is Offline');
            }
            console.log(message);
            console.log(client);
            message.channel.send(status);
        });
    }

};