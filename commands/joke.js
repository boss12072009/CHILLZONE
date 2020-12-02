const Discord = require('discord.js');
const giveMeAJoke = require('discord-jokes');
var version = '0.9.0'

module.exports = {
    name: 'joke',
    description: "this is a joke command!",
    execute(message, args) {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            message.channel.send(joke)
        })
    }
}