const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args) {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('This command is restricted to Staff Only');
        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send('Please mention the user you want to Ban');
        if (!toBan) return message.channel.send(`${args[0]} is not a member`);
        if (!reason) return message.channel.send('Please state a reason to Ban the member for');
        if (!toBan.bannable) {
            return message.channel.send(':x: I cant Ban that user :x:');
        }

        if (toBan.bannable) {
            let e = new Discord.MessageEmbed()
                .setTitle('Ban')
                .addField('Member Banned', toBan)
                .addField('Banned By:', message.author)
                .addField('Reason:', reason)
                .addField('Date', message.createdAt)
                .setColor(0xFD6104)
                .setTimestamp({ timeout: 5000})

            message.channel.send(e);
            message.delete({ timeout: 5000 })
            message.e.delete()
            toBan.ban();
        }
    }
}    