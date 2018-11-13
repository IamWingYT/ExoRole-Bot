const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client2 = new Discord.Client();


module.exports = {

	name: 'unban',

	description: 'Unbans a user from the server.',

	aliases: ['ub'],

	usage: '<user> [reason]',

	cooldown: 0,

	execute(message, args) {
        

        if(!message.member.hasPermission("MANAGE_MEMBERS")){
            message.reply("You dont have the proper permissions!");
        }
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        let reason = args.join(" ").slice(22);
        if(!rMember){message.reply("That user is not found.");} else {
            if(!args[2]){
                rMember.unban()
            } else{
                rMember.unban(reason)
            }

        }

	},

};