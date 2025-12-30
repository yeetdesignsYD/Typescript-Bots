import { Command } from '../../types/Command.ts'
import { Client, Message, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from 'discord.js'


const command: Command = {
  name: "balance",
  aliases: ["bal"],
  description: "Get a member's or your's balance",
  category: "economy",
  async run(client: Client, message: Message, args: string[]) {

    const PhoneEmbed = new EmbedBuilder()
    .setImage("https://yeetdesigns.cc/Logo.png")
    .setColor("Blurple")

    const emojis = {
    ydCash: client.emojis.Economy.Phone.Apps.YDCash,
    ydPay: client.emojis.Economy.Phone.Apps.YDPay,
    bank: client.emojis.Economy.Phone.Apps.Bank,
    store: client.emojis.Economy.Phone.Apps.Store
    }

    var phoneApps = new StringSelectMenuBuilder()
			.setCustomId('phoneapps')
			.setPlaceholder('Open an App!')

    if (!emojis.ydCash && !emojis.ydPay && !emojis.bank && !emojis.store) {
    phoneApps.addOptions(
           new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('YDCash')
					// Description of option
					.setDescription('Open the YDCash app')
					// Value returned in select menu interaction
					.setValue('phoneapp_ydcash'),
          new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('YDPay')
					// Description of option
					.setDescription('Open the YDPay app')
					// Value returned in select menu interaction
					.setValue('phoneapp_ydpay'),
          new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('Bank')
					// Description of option
					.setDescription('Open the bank app')
					// Value returned in select menu interaction
					.setValue('phoneapp_bank'),
          new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('Store')
					// Description of option
					.setDescription('Open the store app')
					// Value returned in select menu interaction
					.setValue('phoneapp_store')
      )
    } else if (emojis.ydCash && !emojis.ydPay && !emojis.store && !emojis.bank) {
      
    } else if (emojis.ydPay && !emojis.ydCash && !emojis.store && !emojis.bank) {
      
    } else if (emojis.bank && !emojis.store && !emojis.ydCash && !emojis.ydPay) {
      
    } else if (emojis.store && !emojis.bank && !emojis.ydCash && !emojis.ydPay) {
      
    } else if (emojis.ydCash && emojis.ydPay && !emojis.store && !emojis.bank) {
    
    } else if (emojis.bank && emojis.store && !emojis.ydCash && !emojis.ydPay) {
    
    } else if (emojis.ydCash && emojis.bank && !emojis.store && !emojis.ydPay) {
      
    } else if (emojis.ydCash && emojis.store && !emojis.ydPay && !emojis.bank) { 
    
    } else if (emojis.ydPay && emojis.bank && !emojis.store && !emojis.ydCash) {
      
    } else if (emojis.ydPay && emojis.store && !emojis.bank && !emojis.yCash) {
      
    } else {
      phoneApps.addOptions(
        new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('YDCash')
          .setEmoji(emojis.ydCash)
					// Description of option
					.setDescription('Open the YDCash app')
					// Value returned in select menu interaction
					.setValue('phoneapp_ydcash'),
        new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('YDPay')
          .setEmoji(emojis.ydPay)
					// Description of option
					.setDescription('Open the YDPay app')
					// Value returned in select menu interaction
					.setValue('phoneapp_ydpay'),
        new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('Bank')
          .setEmoji(emojis.bank)
					// Description of option
					.setDescription('Open the Bank app')
					// Value returned in select menu interaction
					.setValue('phoneapp_bank'),
        new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('Store')
          .setEmoji(emojis.store)
					// Description of option
					.setDescription('Open the Store app')
					// Value returned in select menu interaction
					.setValue('phoneapp_store')
    }

    

    

    message.reply({
         embeds: [
           PhoneEmbed
           ],
          components: [
            ActionRow
            ]
    })
    
     


    
  }
}

export default command
