import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js'

import { config } from "dotenv"
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// Economy Package: Discord-Economy-Super
import Economy from 'discord-economy-super'
import EcoConfig from './configs/Economy.ts'

import {Loader} from './utils/loader.ts'
import {registerCommands} from './utils/registerCommands.ts'

// Database: Quick.DB
import pkg from "quick.db"
const {QuickDB: Database} = pkg


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const client = new Client({
partials: clientPartials,
intents: [
GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildModeration,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
  GatewayIntentBits.AutoModerationConfiguration,
  GatewayIntentBits.AutoModerationExecution,
]
})

client.commands = {
Prefix: new Collection(),
Slash: new Collection()
}
client.snipes = {
Delete: new Collection(),
Update: new Collection()
}

client.eco = new Economy(EcoConfig)

client.aliases = new Collection()
client.config = BotConfig
client.emojis = BotEmojis
client.embeds = BotEmbeds


const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".ts") || f.endsWith(".js"));

for (const file of eventFiles) {
  const eventName = file.split(".")[0];
  const event = (await import(pathToFileURL(path.join(eventsPath, file)).href)).default;
  client.on(eventName, (...args) => event(client, ...args));
}

await Loader.loadCommands.Prefix(client)
await Loader.loadCommands.Slash(client)

await registerCommands()

const token = process.env.TOKEN

client.token(token)
