import ytdl from 'ytdl-core';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
let streamPipeline = promisify(pipeline);
let handler = async (m, { conn, command, text, usedPrefix }) => {
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
    const { link, size } = data.urldl_audio
    await conn.sendMessage(m.chat, {audio: {url: link}, mimetype: 'audio/mp4',
      fileName: `${channel}`,
      contextInfo: {
      externalAdReply: {
         showAdAttribution: true,
         mediaType: 2,
         mediaUrl: videoUrl,
         title: wm,
         sourceUrl: videoUrl,
         thumbnail: await (await conn.getFile(thumnail)).data
        }
      }
    },{quoted:fkontak})
};

handler.help = ['ytmp3'].map((v) => v + ' <YouTube Video URL>');
handler.tags = ['downloader'];
handler.command = /^(ytmp3)$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;