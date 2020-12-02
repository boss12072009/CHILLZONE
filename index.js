
const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix } = require('./botconfig.json');
const fs = require('fs');
const ms = require('ms');
const giveMeAJoke = require('discord-jokes');
const mongoose = require('mongoose');



bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

var version = '0.9.0'

bot.on('ready', () => {
    console.log('Im awake');

    try {
        let serverIn = bot.guilds.size;

        function pickStatus() {
            let status = ['Use .Help', '.membercount', '#General'];
            let Status = Math.floor(Math.random() * status.length);

            bot.user.setActivity(status[Status], {
                type: "STREAMING"
            });
        };
        setInterval(pickStatus, 10000);
    } catch (err) {
        console.log(err);
    }
    bot.user.setStatus('dnd')
})

bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '------{Game Roles}-------');

    guildMember.roles.add(welcomeRole)
    guildMember.guild.channel.cache.get('746481265108189204').send(`Welcome <@${guildMember.user.id}> welcome to ${message.guild.name}`)
})

bot.on('message', message => {


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'help') {
        bot.commands.get('help').run(message, args, prefix)
    } else if (command === 'ban') {
        bot.commands.get('ban').execute(message, args)
    } else if (command === 'cal') {
        bot.commands.get('cal').execute(message, args)
    } else if (command === 'kick') {
        bot.commands.get('kick').execute(message, args)
    } else if (command === 'membercount') {
        bot.commands.get('membercount').execute(message, args)
    } else if (command === 'slowmode') {
        bot.commands.get('slowmode').run(message, args)
    } else if (command === 'ping') {
        bot.commands.get('ping').execute(message, args)
    } else if (command === 'verify') {
        bot.commands.get('verify').execute(message, args)
    } else if (command === 'joke') {
        bot.commands.get('joke').execute(message, args)
    } else if (command === 'mute') {
        bot.commands.get('mute').execute(message, args)
    } else if (command === 'meme') {
        bot.commands.get('meme').run(message, args)
    } else if (command === 'clear') {
        bot.commands.get('clear').run(message, args)
    } else if (command === 'status') {
        bot.commands.get('status').execute(message, args)
    }

})

bot.login(process.env.token)