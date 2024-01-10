import fetch from 'node-fetch';
var handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })
  m.reply('_In progress, please wait..._')
  const ress = await fetch('https://api.akuari.my.id/asupan/ukhty').then(data => data.json())
  await conn.sendFile(m.chat, ress.respon,'asupan.mp4','_nih kak_', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan'];
handler.command = /^(ukhty)$/i;
handler.limit = true

export default handler;