let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `Tidak ada teks untuk survei \n\nExample : \n*${usedPrefix + command}* Pesan  |Hai|Kak`
if (!text.includes('|')) throw  `Pisahkan polling dengan tanda *|* \n\nExample : \n*${usedPrefix + command}* survei saya|op1|op2|op3`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendMessage(m.chat, {poll:{name:`📋 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, values: a, selectableCount: 0}}, m)
}
handler.help = ['poll <halo|apa|kabar>']
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true

export default handler
