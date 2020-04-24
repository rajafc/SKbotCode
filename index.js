const Discord = require("discord.js");
const fs = require ("fs");
const config = require ("./storage/config.json")
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);
 
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0){
        console.log("Aucun fichier de commande !")
        return;
    }
    jsFiles.forEach((f,i) =>{
        var fileGet = require("./commands/" + f);
        console.log("Fichier de commande " + f + " récupéré avec succès !")
        bot.commands.set(fileGet.help.name, fileGet)
    });
});
 
bot.on("ready", async () =>{
    console.log(" ")
    console.log("Connecté en tant que : " + bot.user.tag)
    bot.user.setActivity("s/ | A être Dev !", {type: "PLAYING"});
});
 
bot.on("message", message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 
    var prefix = config.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1)
    var commands = bot.commands.get(command.slice(prefix.length))
    if(commands) commands.run(bot, message, args);
});

bot.login(config.token);