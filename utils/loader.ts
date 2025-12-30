import { Client, Collection } from "discord.js";
import fs from "fs";
import path from "path";
import { Command } from "../types/Command";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadCommands_prefix(client: Client & { commands: Collection<string, Command>; aliases: Collection<string, string> }) {
  const commandsPath = path.join(__dirname, "../commands", "/prefix);
  const categories = fs.readdirSync(commandsPath);

  for (const category of categories) {
    const categoryPath = path.join(commandsPath, category);
    const commandFiles = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".ts") || f.endsWith(".js"));

    for (const file of commandFiles) {
      const filePath = path.join(categoryPath, file);
      const command: Command.Prefix = (await import(pathToFileURL(filePath).href)).default;

      client.commands.Prefix.set(command.name, command);

      if (command.aliases) {
        for (const alias of command.aliases) {
          client.aliases.set(alias, command.name);
        }
      }
    }
  }
}

async function loadCommands_slash(client: Client) {

const commandsPath = path.join(__dirname, "../commands", "/slash)

const categories = fs.readdirSync(commandsPath)

for (const category of categories) {

const categoryPath = path.join(commandsPath, category)

const commandFiles = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".ts") || f.endsWith(".js"))

for (const file of commandFiles) {

    const filePath = path.join(categoryPath, file)
    
    const command: Command.Slash = (await import(pathToFileURL(filePath).href)).default;
    
    client.commands.Slash.set(command.data.name, command)
    
    
    
    
    
    
}

}


}

const Loader = {
loadCommands: {
Prefix: loadCommands_prefix,
Slash: loadCommands_slash
}
}

export default Loader

export {
loadCommands_prefix,
loadCommands_slash,
Loader
}
