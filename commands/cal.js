const Discord = require('discord.js');


module.exports = {
    name: 'cal',
    description: "this is a calculator command!",
    execute(message, args) {
        let method = args[0];
        let firstNumber = Number(args[1]);
        let secondNummber = Number(args[2]);
        const operations = ['add', 'subtract', 'multiply', 'divide'];

        if(!method) return message.reply('Please state an operation.')

        if(!operations.includes(method)) return message.reply('when choosing and operation select add, subtract, multiply, divide');

        if(!args[1]) return message.reply('Please state two numbers to put into the calculator');

        if(!args[2]) return message.reply('Please state two numbers to put into the calculator');

        if (isNaN(firstNumber)) return message.reply('The first number that is stated is not a number');

        if (isNaN(secondNummber)) return message.reply('The second number that is stated is not a number');

        if (method === 'add') {
            let doMath = firstNumber + secondNummber
            message.channel.send(`${firstNumber} + ${secondNummber} = ${doMath}`)
        }
        if (method === 'subtract') {
            let doMath = firstNumber - secondNummber
            message.channel.send(`${firstNumber} - ${secondNummber} = ${doMath}`)
        }
        if (method === 'multiply') {
            let doMath = firstNumber * secondNummber
            message.channel.send(`${firstNumber} x ${secondNummber} = ${doMath}`)
        }
        if (method === 'divide') {
            let doMath = firstNumber / secondNummber
            message.channel.send(`${firstNumber} / ${secondNummber} = ${doMath}`)
        }
    }
}