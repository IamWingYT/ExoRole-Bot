const fs = require('fs');

const Discord = require('discord.js');






const client = new Discord.Client();

client.commands = new Discord.Collection();

module.exports = {

	name: 'server-info',

	description: 'Gives information on the server.',

    cooldown: 0,
    
    aliases: ['info'],

	execute(message) {
        let Guild = message.guild
		message.channel.send({embed: {
            color: 3447003,
            title: `${message.guild.name} server information.`,
            description: "Info for this server",
            fields: [{
                name: "Server Owner:",
                value: `<@${Guild.ownerID}>`
            },
                {
                name: "Members",
                value: `Bots: 5 \nPeople: ${Guild.memberCount - 5}`
            },
            {
                name: "Server Region:",
                value: `${Guild.region}`
            },
            {
                name: "Roles",
                value: `${Guild.roles.array.length}`
            }
            ]
        }});

	},

};