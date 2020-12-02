
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async run(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can\'t use this type of command.")
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don\'t have the right permissions for this command.")
        if (!args[0]) return message.channel.send("You must state the amount of messages to remove")
        const amountToDelete = Number(args[0], 10)

        if (isNaN(amountToDelete)) return message.channel.send("Invalid Number")
        if (!Number.isInteger(amountToDelete)) return message.channel.send("Number must be a whole number")
        if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send("NUmber must be 2-100 to save Network")
        const fetched = await message.channel.messages.fetch({
            limit: amountToDelete
        })

        try {
            await message.channel.bulkDelete(fetched)
                .then(messages => message.channel.send(`Deleted ${messages.size} messages`))
        } catch (err) {
            console.log(err)
            message.channel.send(`I was unable to delete the amount stated`)
        }
    }
}    
