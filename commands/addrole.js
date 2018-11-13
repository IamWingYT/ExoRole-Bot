const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client2 = new Discord.Client();


module.exports = {

	name: 'addrole',

	description: 'Sets the role of a specified user.',

	aliases: ['role'],

	usage: '<user> <role>',

	cooldown: 0,

	execute(message, args) {


        if(!message.member.hasPermission("MANAGE_MEMBERS")){
            message.reply("You dont have the proper permissions!");
        }
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.reply("That user is not found.");
        let role = args.join(" ").slice(22);
        if(!role) return message.reply("No role is specified.");
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) return message.reply("Could not find that role.");
        
        if(rMember.roles.has(gRole.id));
         rMember.addRole(gRole.id);

        try{
            rMember.send(`Congrats! You have been given the role ${gRole.name}`);
        }catch(e){
        message.channel.send(`Congrats, <@${rMember.id}>, you have been given the role ${gRole.name}`);
        }

	},

};