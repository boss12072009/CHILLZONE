const Discord = require('discord.js');

module.exports = {
    name: 'status',
    description: "this is a status command!",
    execute(message, args) {
        const StatusEmbed = new Discord.MessageEmbed()
        .setTitle("Status")
        .setColor(0xfcba03)
        .addField("Status",':green_circle: `Online`:green_circle:', true)
        .addField("Ping",':satellite:`32ms`:satellite:', true)
        .setTimestamp();
        message.channel.send(StatusEmbed)
    }
}    
