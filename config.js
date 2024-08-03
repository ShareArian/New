/*

# Base By Devorsixcore
# Owner ? : t.me/OwnModss
!- do not delete this credit

RECODE  : AKMAL MODS
 
Subscribe My Channel : AkmalMods 
*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['ISI NO LI'] // isi nomor lu
global.ownMain = 'ISI NO LU' // isi nomor lu
global.NamaOwner = 'AkmalMods' //gausah diganti
global.sessionName = 'sesimod'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'BOT ANTI KROCO' //ganti aj klo mau
global.author = 'Mods' //ganti aj klo mau
global.packname = 'Akmal' //ganti aj klo mau
global.url = 'https://www.instagram.com' //gausah diganti
global.urlWa = 'https://youtube.com/@akmalmods?si=GzVJCYK4ZgdNse8V'
global.url1 = 'https://www.instagram.com' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029VaZjmLq2v1IyjGKp6P0U' //gausah diganti

global.xcrash = {
    kz: "ᛃͣͮMods ⌕",
    xv: "🧬༑𝐂⃟⃟𝐫𝐚𝐬𝐡꙲ౄ҈҉ャ",
    xz: "🖤⟩ ༘྅ɖɛᏉᎾֆɨx𝙲Ꮎʀɛ ⿻ ꧏ🤍҈ ༑",
    xk: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
    xc: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 𝐒𝐤𝐲𝐙𝐞𝐭 ☆ >",
    xq: "📱𝐞𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧-𝐙𝐞𝐭✔️"
}


global.mess = { // Custom Sesuka Lu
wait: '‹𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴! ⟩»',
bugwait: 'sending bug. . .`',
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
success: 'Success',
bugrespon: `Processs.....`
}

/*global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}*/

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})