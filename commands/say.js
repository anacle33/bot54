const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande");

	const sayMessage = args.join(" ");
	message.delete().catch();
	let mesg = await message.channel.send(sayMessage);

	if(message.guild.channels.find(channel => channel.name === "『📰』log-bot54")){
		const channeltest = message.guild.channels.find(channel => channel.name === "『📰』log-bot54");
		let embedsay = new Discord.RichEmbed()
		.setDescription('Logs de la commande : Say')
					.setColor('RANDOM')
					.addField(`${message.author.username}`, `à utilisé la commande`)
				    .addField(`Et à écrit :`, `${sayMessage}`)
					
		channeltest.send(embedsay);
	}else{
		return;
	}
	
}

module.exports.help = {
	name: "say"
}
