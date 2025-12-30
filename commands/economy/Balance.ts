import { Command } from '../../types/Command.ts'
import { Client, Message, EmbedBuilder } from 'discord.js'


const command: Command = {
  name: "balance",
  aliases: ["bal"],
  description: "Get a member's or your's balance",
  category: "economy",
  async run(client: Client, message: Message, args: string[]) {

    const { guild } = message

    const userID = args[0]

    const member = await message.mentions.members.first()?.user || await guild.members.fetch(userID)?.user || await guild.members.cache.get(userID)?.user || message.member?.user

    const Emojis = client.emojis

    const Prefix = await client.db.fetch(`guild_${guild.id}`, "Prefix")

     const guildEco = eco.guilds.get(message.guild.id)

  const userEco = await guild.users.get(
    member.id
)

  const [wallet, bank] = [
      user.balance.get(),
      user.bank.get()
  ]

    const BalEmbed = new EmbedBuilder()
    .setTitle(`**${Emojis.Economy.BalanceCmd.Title} ${member.user.tag}'s Balance ${Emojis.Economy.BalanceCmd.Title}**`)
    .setDescription(`
    To check your YDCash or YDPay balance you must use ${Prefix}phone and select the corresponding app
    `)
    .addFields(
      {
        name: "**${Emojis.Economy.Wallet}Wallet:**",
        value: `$${wallet}`
      },
      {
        name: "**${Emojis.Economy.Bank}Bank:**",
        value: `$${bank}`
      }
      )
    .setColor("Blurple")

    message.reply({
      embeds: [
        BalEmbed
        ]
    })
    


    
  }
}

export default command
