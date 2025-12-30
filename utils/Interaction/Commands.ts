import { Client, Interaction, EmbedBuilder, MessageFlags } from 'discord.js'

export default async (client: Client, interaction: Interaction) => {

  const command = await client.commands.Slash.get(interaction.commandName)
  if (!command) {
    const NotFound = new EmbedBuilder()
    .setTitle(`**${errorEmoji} Command not found ${errorEmoji}!**`)
    .setColor("Red")

    return interaction.reply({
      embeds: [
        NotFound
        ],
      flags: MessageFlags.Ephemeral
    })

}

  try {
    await command.execute ? command.execute(client, interaction) : command.run(client, interaction)
  } catch (err) {
    console.error(err)

  }
}
  
  
