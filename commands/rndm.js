
module.exports = {

	name: 'rndm',

    description: 'Generates a random number.',
    
    aliases: ['rn'],

    usage: '<max>',

    cooldown: 0,
    
	execute(message, args) {

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if(!args[0]){
            message.channel.send("This action requires the max number.")
        }else{
            message.channel.send(getRandomInt(0, parseInt(args[0])));
        }
        
	},

};