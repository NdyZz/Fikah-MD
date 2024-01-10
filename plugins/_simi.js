/*import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    if (!m.quoted) return
    if (m.quoted.sender === pairingNumber+'@s.whatsapp.net') {
        if (!m.text) return
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(`https://simsimi.fun/api/v2/?mode=talk&lang=id&message=${encodeURIComponent(m.text)}&filter=false`)
        if (!res.ok) throw eror
        let json = await res.json()
        await conn.sendMessage(m.chat, {text: `${json.success}`},{quoted:m})
        return !0
    }
    return true
}
export default handler*/