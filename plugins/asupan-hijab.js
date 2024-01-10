import fetch from 'node-fetch';
var handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })
  m.reply('_In progress, please wait..._')
  const ress = await fetch('https://api.akuari.my.id/asupan/hijab').then(data => data.json())
  await conn.sendFile(m.chat, ress.respon,'asupan.png','_nih kak_', m)
}
handler.help = ['hijab']
handler.tags = ['asupan'];
handler.command = /^(hijab)$/i;
handler.limit = true

export default handler;