import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`;

  let search = await yts(text);
  let nmF = 'byNdyZz'
  let vid = search.videos[0];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = 'R';

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
  ⬡ Title: ${title}
  ⬡ Duration: ${timestamp}
  ⬡ Views: ${views}
  ⬡ Upload: ${ago}
  ⬡ Link: ${url}
╰────────⬣`;

  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`./tmp/${nmF}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);
  const frsp = await conn.sendMessage(m.chat, {text: captvid}, {quoted: fkontak});
  await conn.sendMessage(m.chat, { audio: { url: `./tmp/${nmF}.mp3`},
    mimetype: 'audio/mp4'
  }, { quoted: frsp });

  // Delete the audio file
  fs.unlink(`./tmp/${nmF}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${nmF}.mp3`);
    }
  });
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(play)$/i;


export default handler;