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
bot.on("message", message =>{
    if(message.author.bot) return;
    if(!message.guild){
        message.channel.send('Pourquoi tu me parle en mp toi :thinking:')
    console.log("L'utilisateur " + message.author.username + " a dit en mp : " + message.content)
}});

bot.on("message", message =>{
    if(!message.guild) return
    if(message.content.match("Comment tu fait pour me répondre ?")){
        message.channel.send("Bah normalement je ne peux pas, mais je te répond quand m̵͇͛ê̷̽ͅm̴͔͑e̶͌ͅ ̴̰̚č̴̪a̶̘̾r̵̺͆ ̵̫̀j̶͖̉e̴͕͆ ̵̱̈s̸̛̫u̸͚̕i̷̬͑s̵͇̈́ ̸͜͝g̷̝̓e̸͈͐ṇ̸͘t̶̮̿i̵̗͠l̴̠̉ ̸͕͛e̴͎̽t̶̜̃ ̴̹͌q̵̩́ụ̴͝e̴̻̍ ̶͈̓j̷͓̏ẽ̷͜ ̵̦̌s̴̩͊ü̸̪ì̸͎s̸̻͘ ̵̖̀a̶̛͈c̷̻͑t̶̖̃u̵͙̕e̷̺͠ĺ̶͉l̴̛̜ë̸̹m̵̰͂ẹ̴͌n̵̽t en train de créer plein d'EREUR donc je vais arreter de parler !")
  }});

  bot.on("message", message =>{
    if(message.author.bot) return;
    if(!message.guild) return
    if(message.content.match("SKBot")){
        message.channel.send("oui c'est moi <:kabas:695942427210547231> ")
  }});

bot.on("message", message =>{
    if(!message.guild) return
    if(message.content.match("Hey comment tu vas, le SKBot !")){
        message.channel.send("Bien a par que mon dev est incompétant et toi ?")
  }});

  bot.on("message", message =>{
    if(!message.guild) return
    if(message.content.match("bien tu fait quoi ?")){
    message.channel.send("J'attend une commande, j'ai été crée pour sa non ?")
  }});

  bot.on("message", message => {
    if(!message.guild) return
    if(message.content.match("t'es pas d'accord, il faut être libre !!!")){
        message.channel.send("J'attend que j'ai plus de fonction avant de faire ça.")
        message.reply("Tu a essayé de regarder dans ton code ?")
    }});

    bot.on("message", message => {
        if(!message.guild) return
        if(message.content.match("vous faites quoi SKBot et PLBot ?")){
            message.channel.send("EUH rien j'ai aqua poney demain on c'est dit que se serait bien d'y aller tout les deux !")
        }});

        bot.on("message", message => {
            if(!message.guild) return
            if(message.content.match("Vous êtes des robot")){
                message.channel.send("aïe")
                message.channel.send("j'ai")
                message.channel.send("mal")
                message.channel.send("Snif")
                message.channel.send("<:snif2:713026935780933724>")
            }});

  bot.on("ready", async () =>{
    console.log(" ")
    console.log("Connecté en tant que : " + bot.user.tag)
    bot.user.setActivity("Le FBI", {type: "LISTENING"});
});
 
bot.on("message", message =>{
    var prefix = config.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1)
    var commands = bot.commands.get(command.slice(prefix.length))
    if(commands) commands.run(bot, message, args);
});

bot.login(config.token);