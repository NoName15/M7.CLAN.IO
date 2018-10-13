const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$$'

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


client.on("roleCreate",  rc => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` + Role Created`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("guildUpdate",  rc => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`+ guild updated`)
  .setDescription(`A guild has been updated \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberKick",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Kicked -`)
  .setDescription(`A member has been kicked by \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberPrune",  rc => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Member Pruned`)
  .setDescription(`A member has been pruned \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberUpdate",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Updated`)
  .setDescription(`A member has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberRoleUpdate",  rc => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Updated Roles`)
  .setDescription(`Updated Roles to \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleUpdate",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteCreate",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Created +`)
  .setDescription(`A Invite Link has been Created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteUpdate",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Deleted -`)
  .setDescription(`A invite link deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiUpdate",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Updated`)
  .setDescription(`A emoji has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Deleted -`)
  .setDescription(`A emoji has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiCreate",  rd => {
const channel = rd.guild.channels.find("name", "اللوق")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Created + `)
  .setDescription(`A emoji has been created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("messageDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Message Deleted -`)
  .setDescription(`A Message has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});





client.login('NTAwMzI0ODI5MjM3NDc3Mzc2.DqJSkQ._Qz7OaF-AlIZu3HIcTV_sQOXBUU');
