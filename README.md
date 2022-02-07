# Command Handler for Telegram Bot (node-telegram-bot-api)

- Simple, (very simple) and easy to use command handler for [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)

# INFO
 - This command handler is based on [Discord.js Command Handler](https://github.com/BracketByte/DJS-Handler) by [BracketByte](https://github.com/BracketByte)
 
- Make sure you had Node.js and NPM installed up to date on your system

# How do you make a new commands?

 1. Make a new .js file in commands folder.
 2. Populate the file with the code represent here:
 ```js
 module.exports = {
	name: "ping",
	execute: async (msg,bot,send,args) =>{
		send("Pong!")
	}
}
 ```
 If you want to make bot replied. do /ping. and it will replied with Pong!
# One more thing (I forgot, what an idiot)
In config.js, there a prefix and token, prefix represent your desire prefix(I suggest keep it /), and token is bot token you get from @BotFather. that's it!, now try start it and see if its work.
