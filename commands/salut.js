const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    if(!message.guild) return
        message.channel.send("Bonjour " + message.author.username + " !")
        console.log("L'utilisateur " + message.author.username + " a éxécuté la commande s/salut")
}

module.exports.help = {
    name: "salut"
}
