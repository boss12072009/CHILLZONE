const Discord = require('discord.js')
const pagination = require("discord.js-pagination")

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, prefix) {

        //Sorts commands into category's

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('**``.ban``**', "Ban\'s the user from the guild")
        .addField('**``.kick``**', "Kick\'s the user from the guild")
        .addField('**``.mute``**', "Mutes\'s the user")
        .addField('**``.slowmode``**', "Change\'s the slowmode for the channel")
        .addField('**``.clear``**', "Deletes a certain amount messages for the channel")
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('**``.cal``**', "Calculator e.g !cal add 1 1")
        .addField('**``.joke``**', "Send\'s a random joke")
        .addField('**``.membercount``**', "Show\'s the number of member\'s in the guild")
        .addField('**``.meme``**', "sends a random meme from r/dankmemes")
        .setTimestamp()

        const fun2 = new Discord.MessageEmbed()
        .setTitle('Fun 2')
        .addField('**``.Status``**', "Shows the status of the Discord Bot")
        .setTimestamp()

        const pages = [
            moderation,
            fun,
            fun2
        ]
        
        
        const Emojilist = ["⏪","⏩"]

        const timeout = '120000'

        pagination(message,pages,Emojilist,timeout)
        
    }
}