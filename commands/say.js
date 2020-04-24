const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let MessageToBot = args.join(" ");
    message.channel.send(MessageToBot);
};

module.exports.help = {
    name: "say"
}