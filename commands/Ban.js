const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    message.delete()

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: | Vous n'avez pas la permission de faire cela !").then(m => m.delete(10000))
    let user = message.mentions.members.first();
    if(!user) return message.channel.send(":x: | Veuillez Mentionner un utilisateur !").then(m => {
        return m.delete(10000);
    })
    if(user.highestRole >= message.member.highestRole) return message.channel.send("Tu essaye de ban ta famille ?").then(m => m.delete(10000))
    if(!user.bannable) return message.channel.send(":x: | TROP FORT IL N'EST PAS KICKABLE !")
    let reason = args.slice(1).join(" ")
    user.send("Vous avez été ban pour raison" + reason + " !" )
    function banUser(){
        user.ban(reason);
    }
    setTimeout(banUser, 1000)
    message.channel.send("L'utilisateur a bien été BAN !")
}

module.exports.help = {
    name: "ban"
}