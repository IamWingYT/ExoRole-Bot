const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client2 = new Discord.Client();


module.exports = {

	name: 'notify',

	description: 'Turns on notifications For announcements',

	aliases: ['n'],

	usage: ' ',

	cooldown: 0,

	execute(message, args) {
        let rMember = message.member
        rMember.addRole(message.guild.roles.find('name', "Announcements"))
        message.reply(`Thanks for turning on notifications.`);

        
    }
        

};