import { Command } from "@sapphire/framework"
import type { Message } from "discord.js"

export class BotInfoCommand extends Command {
    public constructor(context: Command.LoaderContext, options: Command.Options) {
        super(context, {
            ...options,
            name: "bot-info",
            aliases: ["bi"],
            description: "Outputs various information about the bot",
        })
    }

    public async messageRun(message: Message) {
        const reply = await message.reply("🏓 Loading...")
        const content = [
            `🏓 WebSocket Ping: ${this.container.client.ws.ping}ms`,
            `🏓 API Ping: ${reply.createdTimestamp - message.createdTimestamp}ms`,
        ].join("\n")

        return reply.edit({ content })
    }
}
