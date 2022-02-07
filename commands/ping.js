module.exports = {
  name: "ping",
  execute: async (msg,bot,send,args) =>{
    send(`Hi ${args[0]}. Your jobs is ${args[1]}?`)
  }
}