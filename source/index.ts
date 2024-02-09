import { SapphireClient } from "@sapphire/framework"

import * as dotenv from "dotenv"

dotenv.config()

const client = new SapphireClient({
    intents: 3276799, // This is every intent, as far as I know
    defaultPrefix: "c!",
    caseInsensitivePrefixes: true,
    caseInsensitiveCommands: true,
    loadMessageCommandListeners: true,
    allowedMentions: {
        repliedUser: false,
    },
})

client.login(process.env.TOKEN)
