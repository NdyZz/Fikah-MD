import fetch from 'node-fetch';
var handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })
  m.reply('_In progress, please wait..._')
  await conn.sendFile(m.chat, 'https://api.akuari.my.id/asupan/tiktok','asupantt.mp4','_nih kak_', m)
}
handler.help = ['tikvid']
handler.tags = ['asupan'];
handler.command = /^(tikvid)$/i;
handler.limit = true

export default handler;