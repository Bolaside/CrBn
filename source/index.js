const { ActivityType, Client, Events, GatewayIntentBits } = require("discord.js")
const DotEnv = require("dotenv")

DotEnv.config()

if (!process.env.TOKEN) {
  throw new Error("No token provided")
}

const crbn = new Client({ intents: 32767 })

crbn.once(Events.ClientReady, client => {
  console.log(`INFO: ${client.user.tag} is ready!`)

  client.user.setStatus("dnd")
  client.user.setActivity("my balls", {
    state: "your jaws",
    type: ActivityType.PLAYING
  })
})

crbn.login(process.env.TOKEN)
