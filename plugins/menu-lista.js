
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
let { exp, limit, dorracoins, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [{
title: comienzo + ' π° πΌππΉπ πΎπ΄πππ - π΅ππ π° ' + fin,
rows: [
{title: "βπ€΄βππππππ ππ ππ πππππππ", description: "πππππππ πππ πΓΊπππππ ππ ππ πππππππ", rowId: `${usedPrefix}creator`},  
{title: "βπβπππππππ", description: "mππππππ ππ πππππ ππ πππππππ", rowId: `${usedPrefix}infobot`},
{title: "ββοΈβππππ ππππππππ", description: "πΌππππππ ππ πππππ ππ ππππ ππππππππ de KANTU-BOT", rowId: `${usedPrefix}allmenu`},
{title: "βπ€βπππππ πππππππ πππ πππ", description: "πππππππ πππ ππππππ πππππππππ πππ πππ", rowId: `${usedPrefix}grupos`},
{title: "βπ₯οΈβπππ πππ-πππ", description: "πΉπ°π³πΈπ±πΎπ πΌππ»ππΈπ³πΈππΈπ²π΄", rowId: `${usedPrefix}jadibot`},
{title: "βπ°βππππππππ-πππππ-πππ", description: "INFORMACIΓN PARA INSTALAR A KANTU-BOT", rowId: `${usedPrefix}instalarbot`}

]},{
title: comienzo + ' π² ππππ ππππππππ π²' + fin,
rows: [
{title: "π πππππ ππππππππππππππ", rowId: `${usedPrefix}lb`},
{title: "βοΈ πππππ", rowId: `${usedPrefix}minar`},
{title: "π¨βπ­ ππππππππ", rowId: `${usedPrefix}work`},
{title: "π πππππππ", rowId: `${usedPrefix}bal`},
{title: "π° ππππ πππ", rowId: `${usedPrefix}rpgmenu`},
{title: "π πππππππ πππππππππ", rowId: `${usedPrefix}buyall`}
]},{	
title: comienzo + ' π πππππ ' + fin,
rows: [
{title: "π¦ ππππ ππ πππππππππ", rowId: `${usedPrefix}descargasmenu`},
{title: "π§ ππππ ππππππ", rowId: `${usedPrefix}audios`},  
{title: "π? ππππ ππππππ", rowId: `${usedPrefix}juegosdelgrupo`},
 {title: "π° ππππ ππππππππ", rowId: `${usedPrefix}stickermenu`},
 {title: "π ππππ πππππ", rowId: `${usedPrefix}animemenu`},
 {title: "π ππππ πππππ", rowId: `${usedPrefix}soloparaelpropietario`},  
{title: "π ππππ +18", rowId: `${usedPrefix}hornymenu`}
]},{	
title: comienzo + 'ποΈ ππππππ/πππππππ ' + fin,
rows: [
{title: "π ππππππ ππππ ππππππππ", rowId: `${usedPrefix}enable`},  
{title: "β¨ ππππππ πππππππ", rowId: `${usedPrefix}enable welcome`},
 {title: "β¨ πππππππ πππππππ ", rowId: `${usedPrefix}disable welcome`},
{title: "π ππππππ ππππππππ", rowId: `${usedPrefix}enable antilink`},  
 {title: "π πππππππ ππππππππ", rowId: `${usedPrefix}disable antilink`},
{title: "π§¬ ππππππ ππππππππππ", rowId: `${usedPrefix}enable antiarabes`},    
{title: "π§¬ πππππππ ππππππππππ", rowId: `${usedPrefix}disable antiarabes`},
 {title: "π₯΅ ππππππ πππππππππ", rowId: `${usedPrefix}enable modohorny`},
 {title: "π₯΅ πππππππ πππππππππ", rowId: `${usedPrefix}disable modohorny`},
{title: "β ππππππ ππππππππ", rowId: `${usedPrefix}enable restrict`},
{title: "β πππππππ ππππππππ", rowId: `${usedPrefix}disable restrict`},
 {title: "π΅ ππππππ πππππππππππ", rowId: `${usedPrefix}enable anticall`},
 {title: "π΅ πππππππ πππππππππππ", rowId: `${usedPrefix}disable anticall`},   
{title: "π΅ ππππππ ππππππ", rowId: `${usedPrefix}enable audios`},
{title: "π΅ πππππππ ππππππ", rowId: `${usedPrefix}disable audios`}
]}]





let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {
      
text: `
βββββββββββββββββββββββ¬£\nβ${ucapan()}\nβπβ’.ΒΈπΒΈ.β’ *${name}* β’.ΒΈπΒΈ.β’π\nββββββββββββββββββββββ β³Ή

ββββγ *${wm}* γββββ¬£
β β±οΈ β’ *Hora*    
β β β’ ${time}   
βββββββββββββββββββββ
β β‘ β’ *Activo durante*
β β‘ β’ ${uptime}
βββββββββββββββββββββ
β π β’ *βΒ»ΰΌJΜ·OΜ·EΜ·ΰΌΒ«β*
β π β’ ${vs}
β π³ β’ Library:
β π₯οΈ β’ ${library}
βββββββββββββββββββββ
β π₯ β’ *Usuario(s)*
β π« β’ ${Object.keys(global.db.data.users).length} 
βββββββββββββββββββββ
ββββββββββββββββββββ¬£`, footer: `${wm}`, 
//${name} ${ucapan()}

title: null,

buttonText: "π° π¦πππππππ’π‘π ππ€π¨π π°", 

sections }

await conn.sendMessage(m.chat, listMessage)

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|menulista|\?)$/i

handler.exp = 20


export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "πBuenas madrugadas"

  if (time >= 4) {

    res = "πBuenos DΓ­as"

  }

  if (time >= 11) {

    res = "ποΈBuenas Tardes"

  }

  if (time >= 15) {

    res = "πBuenas tardes"

  }

  if (time >= 17) {

    res = "πBuenas noches"

  }

  return res

}

