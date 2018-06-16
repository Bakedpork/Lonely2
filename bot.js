const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if(message.content == 'ping') {

    message.channel.sendMessage('pong');
}

if(message.content == 'server Close') {

    message.channel.sendMessage('Server Close');
}
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
