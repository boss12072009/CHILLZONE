const Discord = require('discord.js');

module.exports = {
    name: 'update',
    description: "this is a update command!",
    execute(message, args) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('This command is restricted to Tester\'s Only');
        const UpdateEmbed = new Discord.MessageEmbed()
            .setTitle('Update')
            .setColor(0xFD6104)
            .addField('Updated Roles', 'Following Roles Updated:Burns')
            .addField('Deleted Roles', 'Following Roles Deleted:none')
            .addField('Updated Category\'s', 'Following Category\'s Updated: @Burns')
            .addField('Deleted Category\'s', 'Following Category\'s Deleted: none')
            .addField('Date', message.createdAt)
        message.channel.send(UpdateEmbed)
        message.delete({ timeout: 1 })
    }
}    