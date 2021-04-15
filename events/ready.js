const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const config = require("../cross.json");

var prefix = config.prefix;

module.exports = client => {

    console.log(`

${client.user.username} İsmi ile giriş yapıldı.`)
    client.user.setStatus("dnd");


    client.user.setActivity(`Cross was here!`);

};