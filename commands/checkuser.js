const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed() 
        .setColor('RANDOM')
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField('ID:', `${user.id}`, true)
        .addField(`Nom d'utilisateur:`, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField('Créé:', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('à rejoins le serveur:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        //.addField('Client:', `${user.client}`, true) // Turns out this doesn't work - We don't need this.
        .addField('Status:', `${user.presence.status}`, true)
        .addField('Game:', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField('Roles:', member.roles.map(roles => `${roles.name}`).join(', '), true)

    message.channel.send({ embed });

    if(message.guild.channels.find(channel => channel.name === "『📰』log-bot54")){
        const channeltest = message.guild.channels.find(channel => channel.name === "『📰』log-bot54");
        let embedsay = new Discord.RichEmbed()
        .setDescription('Logs de la commande : check user')
                    .setColor('RANDOM')
                    .addField(`${message.author.username}`, `à utilisé la commande`) 
                    
        channeltest.send(embedsay);
    }else{
        return;
    }

}

module.exports.help = {
    name: "checkuser"
}
