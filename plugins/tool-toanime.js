import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)

await conn.sendMessage(m.chat, {image: {url: `https://api.akuari.my.id/ai/toanime?urlimg=${link}`}, caption: '_nih kack_'}, {quoted:fkontak})
}
handler.help = ['toanime']
handler.tags = ['tools']
handler.command = /^(toanime|jadianime)$/i
export default handler
