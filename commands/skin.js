module.exports = {
  name: "skin",
  execute: async(bot, msg, chat)=>{
    bot.sendMessage(chat, `https://minotar.net/body/${msg.args[0]}`)
  }
}