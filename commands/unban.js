module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("you dont have the permission to ban members sorry.");
    else {
        let bannedMember = await message.guild.members.unban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " member unbanned.");
            message.channel.send (`${unbannedMember} unbanned!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "unban",
    description: "unBans the baned user",
    usage: "?unban",
    accessableby: "Admins",
    aliases: []
}
