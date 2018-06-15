const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
    if (message.content === 'Baketball') {
    	message.reply('我最愛黑子的籃球了');
  	}
});

    if (message.content === 'Lonely') {
    	message.reply('公主.主人在叫我嗎?');
  	}
    
   if (message.content === 'Funny') {
    	message.reply('我可不覺得.我很寂寞');
  	}
}); 

   if (message.content === 'XD') {
    	message.reply('我可不覺得.我很寂寞');
  	}
}); 
   if (message.content === 'HAHA') {
    	message.sendmessage('我可不覺得.我很寂寞');
  	}
}); 
if(message.content === "Server Open") {
    message.channel.send("伺服器已開啟");
  }
  if(message.content === "Server close") {
    message.channel.send("伺服器已關閉");
  }
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
