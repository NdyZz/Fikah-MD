import { Tiktok } from "../lib/scrape.js";
var handler = async (m, { conn, args }) => {
  if (!args[0]) {
    throw 'Uhm... URL-nya mana?';
  }

  try {
    await conn.reply(m.chat, 'Tunggu sebentar kak, video sedang di download...', m);
    const ress = await Tiktok(args[0])
    conn.sendMessage(m.chat, { caption: `Here you go!`, video: { url: ress.watermark } }, { quoted: fkontak })
  } catch (error) {
    conn.reply(m.chat, `_Error kack_`, m);
  }
};

handler.help = ['tiktok <url>']
handler.tags = ['downloader'];
handler.command = /^t(iktok|tiktok)$/i;

export default handler;