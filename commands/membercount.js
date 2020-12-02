const Discord = require('discord.js');

module.exports = {
    name: 'membercount',
    description: "this is a membercount command!",
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can\'t use this type of command.")
        
        const membersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.MessageEmbed()
        .setColor(0xFD6104)
        .setTitle(`${message.guild.name} has ${membersInServer} members in server`);

        message.channel.send(memberEmbed)
    }
}    