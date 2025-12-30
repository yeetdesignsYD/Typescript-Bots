import { Command } from '../../types/Command.ts'
import { Client, Message, EmbedBuilder } from 'discord.js'

const command: Command = {
  name: "ping",
  description: "Gets the bot's websocket ping!",
  async run (client: Client, message: Message, args: string[]) {

    const wsPing = client.ws.ping

    const Embed = new EmbedBuilder()
    .setTitle(`🏓Pong🏓`)
    .addFields(
      {
        name: "**Ping:**",
        value: ` \`${wsPing}ms\` `
      }
      )
    .setColor("Blurple")

    message.reply({
      embeds: [
        Embed
        ]
    })

    
  }
}

export default Ping
