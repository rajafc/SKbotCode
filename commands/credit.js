const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    if(!message.guild) return
        message.channel.send("https://tenor.com/view/hideo-kojima-credits-video-game-gif-14466133")
        message.channel.send("signé SkrajaFC")
}

module.exports.help = {
    name: "credit"
}