import fetch from 'node-fetch';

const handler = async (m, { conn, args, command, usedPrefix }) => {
  try {
    if (!args[0]) {
      throw `_Masukkan teks_\nContoh: ${usedPrefix + command} Halo Simi`;
    }

    const url = `https://tr.deployers.repl.co/simi?text=${encodeURIComponent(args.join(' '))}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw 'Gagal mengambil data.';
    }

    const data = await response.json();

    const replyText = `${data.success}`;

    await conn.reply(m.chat, replyText, m);
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = args[0] ? 'Gagal mengambil data.' : error;
    await conn.reply(m.chat, errorMessage, m);
  }
};

handler.command = /^(simi|simisimi|simsimi)$/i;
handler.tags = ['fun'];
handler.help = ['simi teks'];

export default handler;
