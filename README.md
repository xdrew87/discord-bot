# Discord Bot

A modern, easy-to-use Discord bot built with [discord.js](https://discord.js.org/) v14. Designed for quick deployment, easy customization, and reliability.

---

## ✨ Features
- **Simple commands:** `!ping`, `!help`, `!server`, `!user`
- **Easy to extend:** Add your own commands in `bot.js`
- **Environment-based config:** Securely store your bot token in `.env`
- **Rich server/user info:** Get details about your server and users
- **Modern codebase:** Uses the latest Discord API and best practices
- **Fast setup:** Get running in minutes
- **Open source:** MIT licensed, ready for collaboration

---

## 🚀 Quick Start

1. **Clone this repository**
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure your bot token:**
   - Create a `.env` file in this folder:
     ```env
     DISCORD_TOKEN=your-bot-token-here
     ```
4. **Start the bot:**
   ```sh
   node bot.js
   ```

---

## 🛠 Usage

Invite your bot to your server using the OAuth2 URL from the [Discord Developer Portal](https://discord.com/developers/applications). Once running, try these commands:

- `!ping` — Replies with "Pong!"
- `!help` — Lists available commands
- `!server` — Shows server info
- `!user` — Shows your Discord tag and ID

---

## 🧩 Customization

Add more commands in `bot.js` by editing the `client.on('messageCreate', ...)` handler. Example:

```js
if (message.content === '!hello') {
    await message.reply('Hello there!');
}
```

You can also:
- Add advanced features (slash commands, embeds, reactions)
- Integrate APIs or databases
- Modularize commands for larger bots

---

## 📦 Requirements
- Node.js 18 or newer
- A Discord bot token ([How to get one?](https://discord.com/developers/applications))

---

## 🛡️ Security Tips
- **Never share your bot token!**
- Use a separate Discord account for bot development
- Regularly update dependencies for security

---

## 📄 License
MIT — see [LICENSE.txt](LICENSE.txt)

---

## 🤝 Contributing
Pull requests and suggestions are welcome! Open an issue or submit a PR to help improve this project.

---

## 💡 Inspiration & Resources
- [discord.js Guide](https://discordjs.guide/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Awesome Discord Bots](https://github.com/discordjs/awesome-discordjs)
