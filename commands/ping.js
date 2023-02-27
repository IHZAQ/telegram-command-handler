module.exports = {
  name: "ping",
  execute: async (bot, msg, chat) =>{
    bot.sendMessage(chat, "Pong!")
  }
}