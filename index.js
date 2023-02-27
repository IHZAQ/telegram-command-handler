const TelegramBot = require("node-telegram-bot-api")
let { token } = require("./config")

const bot = new TelegramBot(token)

const fs = require("fs")

bot.commands = new Map()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}
bot.onText(/^\/(\w+)(?:@[\w-]+)?(?:\s+(.*))?$/, async (msg, match) => {
  const chat = msg.chat.id
  const command = bot.commands.get(match[1])
  if(!command) return;
  msg.args = match[2] ? match[2].split(/\s+/) : []
  try {
    command.execute(bot, msg, chat)
  } catch (error) {
    console.log(error)
  }
})
//Express
const express = require("express")
const app = express()
app.get("/", (req,res) =>{
  res.send("My Awesome Bot online")
  res.status(200)
})
app.listen(8000, ()=>{
  console.log("Bot is ready!")
})
