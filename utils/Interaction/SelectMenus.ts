import { Client, Interaction } from 'discord.js'


export default async (client: Client, interaction: Interaction) => {
  const option = interaction.values[0]
  const { member } = interaction

  const phonePages = client.embeds.Economy.Phone.Apps

  if (interaction.customId === "phoneapps") {

    if (option === "phoneapp_ydcash") {
      const YDCash = await phonePages.YDCash(client, member)
     interaction.message.edit({
       embeds: [
         YDCash
         ]
     })
    } else if (option === "phoneapp_ydpay") {

      const YDPay = await phonePages.YDPay(client, member)
      
      interaction.message.edit({
       embeds: [
         YDPay
         ]
     })
    } else if (option === "phoneapp_store") {
      const Store = await phonePages.Store(client, member)
      interaction.message.edit({
       embeds: [
         Store
         ]
     })
    } else if (option === "phoneapp_bank") {
        const Bank = await phonePages.Bank(client, member)

      interaction.message.edit({
       embeds: [
         Bank
         ]
     })
    }
    

  }

}
