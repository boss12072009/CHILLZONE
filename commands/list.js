const Discord = require('discord.js');
var version = '0.9.0'

module.exports = {
    name: 'list',
    description: "this is a list command!",
    execute(message, args) {
        const list = new Discord.MessageEmbed()
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can\'t use this type of command.")
            .setColor(0xFD6104)
            .setTitle('Command List')
            .setThumbnail(message.author.setAuthor)
            .addField('This is the list of the commands for the bot', 'for any questions create a ticket in #tickets')
            .addField('```Help```', '```Sends the member a help embed```')
            .addField('```Cal```', '```Is a calculator command```')
            .addField('```Membercount```', '```Shows the members in the server```')
            .addField('```Png```', '```Don\'t use for the sake of your eyes```')
            .addField('```Joke```', '```Random joke```')
            .addField('```Jotd```', '```Joke of the day```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('Bot version', version)
            .setAuthor(message.author.username)
            .setTimestamp()
        message.member.send(list);
    }
}