const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Baketball') {
    	message.reply('我最愛黑子的籃球了');
  	}
});

    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
