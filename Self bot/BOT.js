const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('@!')) {
 	let Embed1 = new Discord.RichEmbed()
 	.setTitle("Jaden | selfbot")
 	.setThumbnail("https://pbs.twimg.com/profile_images/980616835484676097/7KFZ31D7.jpg")
 	.setDescription("Incase my discord account gets banned again, here's all my contact info")
 	.addField("Twitter", "https://twitter.com/inbredspecie", false)
 	.addField("Email", "inbredspecimendie@outlook.com", false)
 	.addField("Discord", "inbredspecies#8928", false)
 	.setColor("#006400")
 	.setFooter("Made by Inbredspecies")
 	.setTimestamp()
 
 	
 	return message.channel.send(Embed1)
  }
});

client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login('your token')
