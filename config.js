//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['923430436852','923430436852'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['923430436852'] //another owner number
global.premium = ['923430436852'] //premium number
global.pengguna = 'Mian' //username
global.botnma = '𝐌𝐈𝐀𝐍-𝐁𝐎𝐓-𝐌𝐃' //bot name
global.ownernma = '➺𝄟≛⃝𝐌𝐈𝐀𝐍💌⃝⃝❥͜͡🏵️' //owner name
global.packname = '𝐌𝐈𝐀𝐍-𝐁𝐎𝐓' //sticker package name
global.author = 'By 𝙼𝙸𝙰𝙽' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'W̶̶a̶̶i̶̶t̶ ̶o̶̶n̶̶e̶ ̶m̶̶i̶̶n̶̶u̶̶t̶̶e̶̶🤗❓...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
