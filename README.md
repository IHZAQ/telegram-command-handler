# Command Handler for Telegram Bot (node-telegram-bot-api)

- Simple, (very simple) and easy to use command handler for [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)

# INFO
 - This command handler is based on [Discord.js Command Handler](https://github.com/BracketByte/DJS-Handler) by [BracketByte](https://github.com/BracketByte)
 
- Make sure you had Node.js and NPM installed up to date on your system

# How do you make a new commands?
 1. Go to Terminal/Shell and run `npm install` to install all important dependencies
 1. Make a new .js file in commands folder.
 2. Populate the file with the code represent here:
 ```js
 module.exports = {
	name: "ping",
	execute: async (bot, msg, chat) =>{
		bot.sendMessage(chat, "Pong!")
	}
}
 ```
the `chat` variable represents chat id, so bot is gonna send a message "Pong!" to that chat

 If you want to make bot replied. do /ping. and it will replied with Pong!

I also advised you to visit the [Github](https://github.com/yagop/node-telegram-bot-api) repository of node-telegram-bot-api package so you can get more information on how to send a picture, do advance stuff, and etc