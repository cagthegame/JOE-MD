let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙻𝙸𝙽𝙺 𝙴𝚁𝚁𝙾𝙽𝙴𝙾 𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n*👉🏻 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙿𝚄𝙴𝙳𝙴 𝙲𝙰𝚄𝚂𝙰𝚁 𝙸𝙽𝚃𝙴𝚁𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝚄𝙽𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙼𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙽𝚄𝙴𝚅𝙾*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*el Bot se ha unido al grupo✅*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*[❗𝙄𝙣𝙛𝙤❗] 📧 *𝑵𝒖𝒆𝒗𝒂𝒔 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒖𝒏 𝒈𝒓𝒖𝒑𝒐*\n\n*👤 *𝑵𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆𝒍 𝒔𝒐𝒍𝒊𝒕𝒂𝒏𝒕𝒆*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝑳𝒊𝒏𝒌 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐:*\n ' + link, jid)

m.reply(`*✅ 𝙎𝙪 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙤́ 𝙖𝙡 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖)*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝙎𝙪 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙧𝙖́ 𝙚𝙫𝙖𝙡𝙪𝙖𝙙𝙤 𝙮 𝙦𝙪𝙚𝙙𝙖𝙧𝙖́ 𝙖 𝙙𝙚𝙘𝙞𝙨𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖).*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *𝙀𝙨 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙦𝙪𝙚 𝙨𝙪 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙨𝙚𝙖 𝙧𝙚𝙘𝙝𝙖𝙯𝙖𝙙𝙖 𝙥𝙤𝙧 𝙡𝙖𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙘𝙖𝙪𝙨𝙖𝙨:*\n1️⃣ *𝙀𝙡 𝙗𝙤𝙩 𝙚𝙨𝙩𝙖́ 𝙨𝙖𝙩𝙪𝙧𝙖𝙙𝙤* .\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *𝙀𝙡 𝙗𝙤𝙩 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙘𝙤𝙣 𝙡𝙖𝙨 𝙣𝙤𝙧𝙢𝙖𝙩𝙞𝙫𝙖 𝙙𝙚 𝙀𝙡 𝙗𝙤𝙩*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙤*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *𝙉𝙤 𝙨𝙚 𝙖𝙜𝙧𝙚𝙜𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙜𝙪́𝙣 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖)*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *𝙇𝙖𝙨 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙥𝙪𝙚𝙙𝙚 𝙩𝙖𝙧𝙙𝙖 𝙝𝙤𝙧𝙖𝙨 𝙚𝙣 𝙨𝙚𝙧 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙞𝙙𝙖𝙨. 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙩𝙚𝙣𝙚𝙧 𝙥𝙖𝙘𝙞𝙚𝙣𝙘𝙞𝙖 𝙜𝙧𝙖𝙘𝙞𝙖𝙨*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
