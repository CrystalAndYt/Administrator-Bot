const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
      if(!message.content.startsWith(prefix)) return
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    let queue = await Client.distube.getQueue(message)
    if(queue) {
        Client.distube.stop(message)
        message.channel.send('Party is over, disconnected')
    } else if(!queue) {
        return
    }
}

module.exports.config = {
    name: "stop",
    description: "",
    usage: "?stop",
    accessableby: "Members",
    aliases: []
}
