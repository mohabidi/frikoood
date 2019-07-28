const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("576422785891434497")
setInterval(function() {
channel.send(`Freind bye bye hi `);
}, 30)
})

client.login(process.env.BOT_TOKEN);