const Discord = require('discord.js');
var version = '0.9.0';

module.exports = {
    name: 'howto',
    description: "this is a howto command!",
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('This command is restricted to Tester\'s Only');
        const howto = new Discord.MessageEmbed()
            .setColor(0xFD6104)
            .setTitle('How to get verified')
            .addField('Verified', 'Do !verify in the #verification to get yourself the verified role')
            .addField('Bot Version', version)
        message.channel.send(howto);
    }
}