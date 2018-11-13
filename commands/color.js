const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client2 = new Discord.Client();


module.exports = {

	name: 'color',

	description: 'Changes the color of your name.',

	aliases: ['c'],

	usage: '<color>',

	cooldown: 0,

	execute(message, args) {
        let rMember = message.member
        if(!rMember) return message.reply("That user is not found.");
        let role = args[0]
        if(!role) return message.reply("No color specified");
        let gRole = message.guild.roles.find('name', role);
        if(!gRole) return message.reply("Could not find that color.");
        
        let colors = ["Blue", "Red", "Green", "Black", "Purple"];

        if(colors.includes(gRole.name)){
            rMember.removeRole(message.guild.roles.find('name', "Red").id);
            rMember.removeRole(message.guild.roles.find('name', "Blue").id);
            rMember.removeRole(message.guild.roles.find('name', "Green").id);
            rMember.removeRole(message.guild.roles.find('name', "Black").id);
            rMember.removeRole(message.guild.roles.find('name', "Purple").id);

            if(rMember.roles.has(gRole.id));
             rMember.addRole(gRole.id);

             try{
                message.channel.send(`<@${rMember.id}>, you changed your color to ${gRole.name}`);
             }catch(e){
              print(e)
             }
        }else{message.reply("That color does not exist")};

        
    }
        

};