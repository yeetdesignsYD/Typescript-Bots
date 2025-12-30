import { Client, Message, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js"

export default async (client: Client, message: Message) => {
 try {
        const config = client.config
        const prefix = await client.db.get(`guild_${message.guild.id}.Prefix`) || config.Prefix
  if (message.author.bot || !message.content?.toLowerCase().startsWith(Prefix)) return;

  const args = message.content?.toLowerCase().slice(Prefix.length).trim().split(/ +/);
  const cmdName = args.shift()?.toLowerCase();

  if (!cmdName) return;

  const command =
    client.commands.Prefix.get(cmdName) ||
    client.commands.Prefix.get(client.aliases.get(cmdName));

  if (!command) {
    {
const errorEmoji = client.emojis.Error.NoCommand || "🚫"
    const CMDNotFound = new EmbedBuilder()
    .setTitle(`**${errorEmoji} Command not found ${errorEmoji}!**`)
    .addFields(
      {
        name: "**Command Name:**",
        value: ` \`${cmdName}\` `
      }
      )
    .setColor("Red")

    message.reply({
      embeds: [
        CMDNotFound
        ]
    })
        
    
  };
  };

  // Permission check
  if (command.permissions?.length) {
    const hasPerms = message.member?.permissions.has(command.permissions);
    if (!hasPerms) {
      const perms = command.permissions.map(perm => `${perm}`)
      var permNum = 1
      const errorEmoji = client.emojis.Error.NoPermissions || "🚫"
      const noPerms = new EmbedBuilder()
      .setTitle(`**${errorEmoji} You don't have permission to use this command ${errorEmoji}!**`)

      command.permissions.map(perm => {
        noPerm
        .addFields(
          {
            name: `**Permission ${permNum}:**`,
            value: `${perm}`
          }
          )
        permNum++
      })

      return message.reply({
        embeds: [
          noPerms
          ]
      })
      // return message.reply(" You don’t have permission to use this command!");
    }
  }

  try {
    await command.run(client, message, args);
  } catch (err) {
    console.error(err);
    const errorEmoji = client.emojis.Error.Normal || "❌" 

    const SupportBtn = new ButtonBuilder()
   .setLabel("Support")
   .setURL(client.config.SupportURL)
   .setStyle(ButtonStyle.Link)

   const ActionRow = new ActionRowBuilder()
   .addComponents(
     SupportBtn
     )

    const runError = new EmbedBuilder()
    .setTitle(`**${errorEmoji} There was an error running ${command.name} ${errorEmoji}!**`)
    .setDescription(`
    Please contact our support if the issue continues
    `)
    .setColor("Red")
    return message.reply({
      embeds: [
        runError
        ],
      components: [
        ActionRow
        ]
    })
   // message.reply(" There was an error running that command.");
  }
    } catch (err) {
console.error(err)

   const errorEmoji = client.emojis.Error.Normal || "❌" 
  const SupportBtn = new ButtonBuilder()
   .setLabel("Support")
   .setURL(client.config.SupportURL)
   .setStyle(ButtonStyle.Link)

   const ActionRow = new ActionRowBuilder()
   .addComponents(
     SupportBtn
     )
   const codeError = new EmbedBuilder()
   .setTitle(`**${errorEmoji} There was an error with the code ${errorEmoji}!**`)
   .setDescription(`
 Please contact our support
   `)
   .setColor("Red")

   return message.channel.send({
     embeds: [
       codeError
       ],
     components: [
       ActionRow
       ]
   })
       
   //message.channel.send("❌ There was an error for my code please contact support")
}
}
