const Discord = require('discord.js');
const ms = require('ms');
const fs = require('fs');

module.exports = {
    name: 'mute',
    description: "this is a mute command!",
    execute( prefix, message, args) {

      const target = message.mentions.users.first();
      if(target) {
        let mainRole = message.guild.cache.find(role => role.name === 'Verified');
        let muteRole = message.guild.cache.find(role => role.name === 'MUTED');

        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has now been muted`);

      } else {
        message.channel.send('Can\'t find that member')
      }

    }
}