module.exports = {
  name: "skin",
  execute: async(msg,bot,send,args)=>{
    send(`https://minotar.net/body/${args[0]}`)
  }
}