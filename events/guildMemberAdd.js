const Discord = require("discord.js");
const ayar = require('../cross.json');
const moment = require("moment");
const { min } = require("moment");
moment.locale('tr')

module.exports = async(member) => {
    let client = member.client;
    let channel = member.guild.channels.cache.get(ayar.registerChat)
    let guildID = client.guilds.cache.get(ayar.guildID)
    let şüphe = Date.now() - member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 10 ? "Şüpheli!" : "Güvenli!" // 10 OLAN KISIM GÜNDÜR AYARLAYABİLİRSİNİZ.

    let date = moment(member.user.createdAt)
    const startedAt = Date.parse(date);
    var msecs = Math.abs(new Date() - startedAt);

    const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
    msecs -= years * 1000 * 60 * 60 * 24 * 365;
    const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
    msecs -= months * 1000 * 60 * 60 * 24 * 30;
    const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
    msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
    const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
    msecs -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(msecs / (1000 * 60 * 60));
    msecs -= hours * 1000 * 60 * 60;
    const mins = Math.floor((msecs / (1000 * 60)));
    msecs -= mins * 1000 * 60;
    const secs = Math.floor(msecs / 1000);
    msecs -= secs * 1000;

    var string = "";
    string = `${years ? years+ " yıl" : ""} ${months ? months+ " ay" : ""} ${weeks ? weeks+ " hafta" : ""} ${days ? days+ " gün" : ""} ${hours ? hours+ " saat" : ""} ${mins ? mins+ " dakika" : ""}`
    string = string.trim();
    let gün = moment(new Date(date).toISOString()).format('DD')
    let ay = moment(new Date(date).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
    let yıl = moment(new Date(date).toISOString()).format('YYYY')
    let saat = moment(new Date(date).toISOString()).format('HH:mm')
    let kuruluş = `${gün} ${ay} ${yıl} ${saat}`;

    if (şüphe === "Güvenli!") {
        member.roles.set([ayar.kayıtsızRolü])
        member.setNickname(`${ayar.unTag} İsim | Yaş`)
        channel.send(`
        Sunucumuza hoş geldin ${member}!
    
        Hesabın **${moment(member.user.createdTimestamp).format("LLL")}** tarihinde (\`${string}\`) önce oluşturulmuş. Hesap **${şüphe}**
    
        Sunucu kurallarımız <#${ayar.kurallar}> kanalında belirtilmiştir.
    
        Ayrıca bize destek olmak için tagımızı alabilirsin. **${ayar.tag}**
        `)

    } else {
        member.roles.set([ayar.şüpheliRol])
        member.setNickname(`${ayar.unTag} Şüpheli | Hesap`)

        channel.send(`

${member} Adlı kullanıcı sunucuya katıldı, Hesabı 10 günden yeni olduğu için şüpheli hesap rolü verildi.`)
    }
}, module.exports.configuration = {
    name: "guildMemberAdd"
}