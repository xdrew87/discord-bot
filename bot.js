// Discord bot using discord.js v14 (latest as of 2026)
// Make sure to install discord.js: npm install discord.js

const { Client, GatewayIntentBits, Partials, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    // Simple ping command
    if (message.content === '!ping') {
        await message.reply('Pong!');
    }

    // Help command
    if (message.content === '!help') {
        await message.reply('Commands: !ping, !server, !user, !help');
    }

    // Server info
    if (message.content === '!server') {
        await message.reply(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    // User info
    if (message.content === '!user') {
        await message.reply(`Your tag: ${message.author.tag}\nYour ID: ${message.author.id}`);
    }
});

// Add more features here as needed

// Login using token from .env file
client.login(process.env.DISCORD_TOKEN);

// To run: 
// 1. Create a .env file with DISCORD_TOKEN=your-bot-token
// 2. Run: npm install discord.js dotenv
// 3. Start: node bot.js
