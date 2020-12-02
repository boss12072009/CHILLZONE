const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "this is a slowmode command!",
     async run(message, args) {
       if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You Can\'\t use this type of command');
       if(!args [0]) return message.channel.send('You did not mention a number in seconds');
        if (isNaN(args[0]))return message.channel.send('The number stated is not a number');
        const setTimeTo = Number(args[0]);

        if (setTimeTo === 0) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };
        if (setTimeTo === 5) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 10) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 15) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 30) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        }; 

        if (setTimeTo === 60) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 120) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`) 
        };

        if (setTimeTo === 300) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 600) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 900) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 1800) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 3600) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 7200) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        if (setTimeTo === 21600) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds`)
        };

        message.channel.send(`Invalid Time is not either 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600, 7200, 21600`)
       
    }
}    