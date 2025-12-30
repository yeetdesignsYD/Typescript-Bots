import { Client, Interaction, Message, PermissionResolvable } from "discord.js"

export interface CommandPrefix {
name: string;
description?: string;
category?: string;
aliases?: string[];
permissions?: PermissionResolvable;
run: (client: Client, message: Message, args: string[]) => Promise<void>;
}
export interface CommandSlash {
data: {
name: string;
description: string;
};
run: (client: Client, interaction: Interaction) => Promise<void>;
}


  
