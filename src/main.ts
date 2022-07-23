import { Client, GatewayIntentBits } from 'discord.js'
// import { Message, Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

client.once('ready', () => {
  console.log('Ready!')
  if (client.user) {
    console.log(client.user.tag)
  }
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const { commandName } = interaction

  if (commandName === 'ping') {
    await interaction.reply('Pong!')
  } else if (commandName === 'server') {
    await interaction.reply('Server info.')
  } else if (commandName === 'user') {
    await interaction.reply('User info.')
  }
})

client.login(process.env.TOKEN)
