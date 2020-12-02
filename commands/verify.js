const Discord = require('discord.js');
var version = '0.9.0'

module.exports = {
    name: 'verify',
    description: "this is a verify command!",
    execute(message, args) {
        let mainrole = message.guild.roles.cache.find(role => role.name === "Verified");

        message.member.roles.add(mainrole.id);
        const verificationEmbed = new Discord.MessageEmbed();
        message.delete({ timeout: 1 });
    }
}