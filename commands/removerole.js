const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client2 = new Discord.Client();


module.exports = {

	name: 'removerole',

	description: 'Removes the role of a specified user.',

	aliases: ['norole'],

	usage: '<user> <role>',

	cooldown: 0,

	execute(message, args) {


        if(!message.member.hasPermission("MANAGE_MEMBERS")){
            message.reply("You dont have the proper permissions!");
        }
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.reply("That user is not found.");
        let role = args.join(" ").slice(22);
        if(!role) return message.reply("No rule is specified.");
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) return message.reply("Could not find that role.");
        
        if(rMember.roles.has(gRole.id));
         rMember.removeRole(gRole.id);

        try{
            rMember.send(`You no longer have the role ${gRole.name}`);
        }catch(e){
        message.channel.send(`<@${rMember.id}>, you no longer have the role ${gRole.name}`);
        }

	},

};