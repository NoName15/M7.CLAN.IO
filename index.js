const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$$'
const botconfig = require("./botconfig.json");
const fs = require("fs");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('+[-----------------------------------------------------------------]+')
  console.log(`[Start] ${new Date()}`);
  console.log('+[-----------------------------------------------------------------]+')
  console.log('')
  console.log('+[------------------------------------]+');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('+[------------------------------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log(' Bot Is Online')
  console.log('+[------------]+')
  console.log('')
  console.log('')
});


client.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.find('name', 'log')

    var newuserjoinembed = new Discord.RichEmbed()
      .setColor('00FF00')
      .setAuthor(member.user.tag + ' دخل السيرفر', member.user.displayAvatarURL)
      .addField(`:inbox_tray: ولكم حبي ${member.user.tag}`)
      .setFooter(`شخص دخل`)
      .setTimestamp()
      return welcomechannel.send(newuserjoinembed);
});

client.on('guildMemberRemove', member => {
    const goodbyechannel = member.guild.channels.find('name', 'log')

    var newuserjoinembed = new Discord.RichEmbed()
      .setColor('#FF0000')
      .setAuthor(member.user.tag + ' خرج من السيرفر', member.user.displayAvatarURL)
      .addField(`:outbox_tray: باي ${member.user.name} :disappointed_relieved: `)
      .setFooter(`شخص خرج`)
      .setTimestamp()
      return goodbyechannel.send(newuserjoinembed);
});

client.on("channelCreate", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'log');
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("تم انشاء غرفة")
		.setColor("RANDOM")
		.setDescription(`غرفة **${channel.type} **, تحت اسسم **${channel.name}**, قد تم انشاءها الان!`)
		.setTimestamp(new Date());
	logs.send(cembed)
});

client.on("channelDelete", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'log');
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("تم  حذف غرفة")
		.setColor("RANDOM")
		.setDescription(`غرفة **${channel.type} **, تحت الاسم **${channel.name}**, قد تم حذفها الان!`)
		.setTimestamp(new Date())
	logs.send(cembed)
});








client.login('NTAwMzI0ODI5MjM3NDc3Mzc2.DqJSkQ._Qz7OaF-AlIZu3HIcTV_sQOXBUU');
