const Discord = require('discord.js');


module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args) {

        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('This command is restricted to Staff Only');
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send('Please mention the user you want to kick');
        if (!toKick) return message.channel.send(`${args[0]} is not a member`);
        if (!reason) return message.channel.send('Please state a reason to kick the member for');
        if (!toKick.kickable) {
            return message.channel.send(':x: I cant kick that user :x:');
        }

        if (toKick.kickable) {
            let x = new Discord.MessageEmbed()
                .setTitle('Kick')
                .addField('Member Kicked', toKick)
                .addField('Kicked By:', message.author)
                .addField('Reason:', reason)
                .addField('Date', message.createdAt)
                .setColor(0xFD6104)
                .setTimestamp()

            message.channel.send(x);
            message.delete({ timeout: 5000 })
            toKick.kick();
        }
    }
}    