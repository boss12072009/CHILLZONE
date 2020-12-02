const Discord = require('discord.js');
var version = '0.9.0'

module.exports = {
    name: 'verified',
    description: "this is a Verify command!",
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('This command is restricted to Tester\'s Only');
        const verified = new Discord.MessageEmbed()
            .setColor(0xFD6104)
            .setTitle('Verfication')
            .addField('Rules', 'Make sure you have read the rules and how-to-verify')
            .addField('Bot version', version)
        message.channel.send(verified);
    }
}