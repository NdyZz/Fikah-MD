/*import * as baileys from '@adiwajshing/baileys'
import { Brainly } from 'brainly-scraper-v2'
import fetch from 'node-fetch'
Brainly.initialize()
let brainly = new Brainly('id')

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query'
	let res = await brainly.search(text, "id").then(data => data.map(v => v)).catch(error => console.log(error))
	if (res) {
    conn.sendMessage(m.chat, {text: `*Brainly Search*\n\n${res[0].answers}`}, {quoted:m})
	} else {
    console.log('error')
	}
}
handler.help = ['brainly']
handler.tags = ['tools']
handler.command = /^(brainly)$/i

export default handler*/
