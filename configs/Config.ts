import { config } from 'dotenv'
config()

const Config = {
Prefix: process.env.DISCORD_PREFIX,
Owner: process.env.DISCORD_OWNER
}

export default Config
