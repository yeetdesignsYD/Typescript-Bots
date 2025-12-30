import { Client, Interaction } from "discord.js"

import interactions = from '../utils/Interactions/index'

export default async (client: Client, interaction: Interaction) => {
  if (i.isChatInputCommand()) {
            interactions.Commands(client, interaction)
  } else if (i.isButton()) { 
        interactions.Buttons(client, interaction)
  }  else if (i.isStringSelectMenu()) {
			// respond to the select menu
            interactions.SelectMenus(client, interaction)
		}

}
