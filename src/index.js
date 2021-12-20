require('dotenv').config();
const Discord = require('discord.js');
const sample = require('lodash.sample');
const quotes = require('./quotes.js');

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on('messageCreate', (msg) => {
  if (msg.content == '!quote') {
    msg.channel.send('"' + sample(quotes) + '" - The Joker');
  }
});

client.login(process.env.TOKEN);
