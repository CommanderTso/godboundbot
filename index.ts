require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client()

client.once('ready', () => {
  console.log("Ready!")
})

client.on('message', (message: { content: any }) => {
  console.log(message.content)
})

client
  .login(process.env.DISCORD_TOKEN)
  .catch((reason: any) => {
    console.error(reason)
  })





