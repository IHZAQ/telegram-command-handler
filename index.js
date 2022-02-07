const TelegramBot = require("node-telegram-bot-api")
const { Collection } = require("@discordjs/collection")
const { prefix } = require("./config")
const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true})

const fs = require("fs")

bot.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on('message', async msg =>{
  const content = msg.text.toLowerCase();
  if(!content.startsWith(prefix)) return;
  const args = content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase()
  const command = bot.commands.get(commandName)
  if(!command) return;
  async function send(str){
    bot.sendMessage(msg.chat.id,str)
  }
  try {
    command.execute(msg,bot,send,args)
  } catch(error){
    console.log(error)
    send("An oopsie had happen")
  }
})
//Express
const express = require("express")
const app = express()
app.get("/", (req,res) =>{
  res.send("Skin Stealer Telegram Bot is ready.")
  res.status(200)
})
app.listen(8000, ()=>{
  console.log("Bot is ready!")
})