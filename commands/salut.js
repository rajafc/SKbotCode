const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    if(!message.guild) return
    if (message.content === prefix + "salut")
        message.channel.send("Bonjour " + message.author.username + " !")
}

module.exports.help = {
    name: "salut"
}
