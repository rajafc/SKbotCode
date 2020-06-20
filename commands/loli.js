const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    if(!message.guild) return
        message.channel.send("Calling The FBI...")
        message.channel.send("https://tenor.com/view/traffic-fbiopen-up-raid-gif-13450966")
        console.log("L'utilisateur " + message.author.username + " a éxécuté la commande s/loli APPELEZ LE FBI EUUUUU")
}

module.exports.help = {
    name: "loli"
}
