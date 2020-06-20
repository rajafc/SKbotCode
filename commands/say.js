const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if(!message.guild) return
    console.log("L'utilisateur " + message.author.username + " a dit " + message.content)
    message.delete()
    let MessageToBot = args.join(" ");
    message.channel.send(MessageToBot);
};

module.exports.help = {
    name: "say"
}