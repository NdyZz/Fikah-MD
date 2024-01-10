import fetch from 'node-fetch';

var handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
  if (!text) throw `Usage: ${usedPrefix}${command} <YouTube Video URL>`;
  const videoUrl = text;
  const data = await fetch(`https://api.akuari.my.id/downloader/yt1?link=${videoUrl}`)
  .then(ress => ress.json())
  const { views, uploadDate, channel, thumnail } = data.info
  const { link, size, quality } = data.urldl_video
  const cap = `🔗 *URL:* ${videoUrl}\n👀 *Views:* ${views}\n🕒 *Upload:* ${uploadDate}\n📺 *Channel:* ${channel}\n🗃️ *Size:* ${size}\n🔖 *Quality:* ${quality}
   `.trim()
  await conn.sendMessage(m.chat, {video: {url: link}, caption: cap},{quoted:fkontak})
};

handler.help = ['ytmp4'].map((v) => v + ' <YouTube Video URL>');
handler.tags = ['downloader'];
handler.command = /^(ytmp4)$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;