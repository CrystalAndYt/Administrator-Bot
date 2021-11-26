module.exports.run = async (bot, message, args) => {
      message.reply('Sup')
}

module.exports.config = {
    name: "hello",
    description: "a cool fun command",
    usage: "?hello",
    accessableby: "Members",
    aliases: []
}
