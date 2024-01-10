import fetch from 'node-fetch';
var handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })
  m.reply('_In progress, please wait..._')
  const ress = await fetch('https://api.akuari.my.id/asupan/cecan').then(data => data.json())
  await conn.sendFile(m.chat, ress.respon,'asupan.png','_nih kak_', m)
}
handler.help = ['cecan']
handler.tags = ['asupan'];
handler.command = /^(cecan)$/i;
handler.limit = true

export default handler;