const { prefix } = require('../config.json');



module.exports = {

	name: 'help',

	description: 'List all of my commands or info about a specific command.',

	aliases: ['commands'],

	usage: '[command name]',

	cooldown: 5,

	execute(message, args) {

		const data = [];

		const { commands } = message.client;
String.prototype.removeWord = function(searchWord){
    var str = this;
    var n = str.search(searchWord);
    while(str.search(searchWord) > -1){
        n = str.search(searchWord);
        str = str.substring(0, n) + str.substring(n + searchWord.length, str.length);
    }
    return str;
}

		if (!args.length) {

			data.push('Here\'s a list of all my commands:');

			data.push(`addrole, ban, help, kick, ping, removerole, rndm, server-info, unban`);

			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
			return message.author.send(data, { split: true })

				.then(() => {

					if (message.channel.type === 'dm') return;

					message.reply('I\'ve sent you a DM with all my commands!');

				})

				.catch(error => {

					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);

					message.reply('it seems like I can\'t DM you!');

				});

		}



		const name = args[0].toLowerCase();

		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));



		if (!command) {

			return message.reply('that\'s not a valid command!');

		}



		data.push(`**Name:** ${command.name}`);



		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);

		if (command.description) data.push(`**Description:** ${command.description}`);

		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);



		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);



		message.channel.send(data, { split: true });

	},

};