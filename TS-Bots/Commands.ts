import { Command } from '../../types/Command.ts'
import { Client, Message, EmbedBuilder } from 'discord.js'


const command: Command = {
  name: "Command_Name",
  aliases: ["Command_Aliases"],
  description: "Command_Description",
  category: "Command_Category",
  async run(client: Client, message: Message, args: string[]) {
/*
Code Here
*/
  }
}

export default command
