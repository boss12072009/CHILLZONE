const randompuppy = require('random-puppy');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
var version = '0.9.0'

module.exports = {
    name: 'meme',
    description: "this is a meme command!",
    async run (message, args) {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const MemeEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Your meme sir/ma'am. From r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(MemeEmbed)
    }
}