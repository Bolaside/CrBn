import { Events, Listener } from "@sapphire/framework"
import type { Client } from "discord.js"

export class ClientReadyListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            once: true,
            event: Events.ClientReady,
        })
    }

    public run(client: Client) {
        this.container.logger.info(`Logged in as ${client.user!.tag} (${client.user!.id})`)
    }
}
