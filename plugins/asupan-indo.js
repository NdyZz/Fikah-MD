import fetch from 'node-fetch';
var handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })
  m.reply('_In progress, please wait..._')
  const ress = await fetch('https://tr.deployers.repl.co/pinhd?q=cewek+indonesia').then(data => data.json())
  let nm = Math.floor(Math.random() * ress.pins.length)
  await conn.sendFile(m.chat, ress.pins[nm],'asupan.png','_nih kak_', m)
}
handler.help = ['indo']
handler.tags = ['asupan'];
handler.command = /^(indo|cewekindo)$/i;
handler.limit = true

export default handler;