const Discord = require("discord.js");
const config = require('./config.json');

const bot = new Discord.Client();

bot.on('ready', () => {
	bot.user.setActivity('En dev',
		{ type: 'streaming', 
		url: 'https://www.twitch.tv/livestev'});
});


bot.on('message', async message => {
if(message.content.startsWith(`${config.prefix}Setlogs`)){
	 if(!message.member.hasPermission('ADMINISTRATOR')){
                  message.channel.send("Vous n'êtes pas administrateur")   
            }else{
                  if(!message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
                        message.channel.send("Je n'ai pas la permission de pouvoir créer des salons textuel");
                  }else{
                        message.guild.createChannel('『📰』log-bot54', {type: 'text'})
                        message.channel.send('Channel créé avec succès')
                  }
            }
	}
});

bot.on('message', message => {
	let prefix = config.prefix;
	let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmds = args.shift().toLowerCase();

// Return Statements
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
	try {
        let commandFile = require(`./commands/${cmds}.js`);
        commandFile.run(bot, message, args, prefix);
    } catch(e) {
        console.log(e.message);
    } finally {
        //console.log(`${message.author.username} ran the command: ${cmds}`);
    }
});

bot.login(process.env.token)
