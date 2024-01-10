import axios from 'axios'

const Nomor = '083133318509'

let handler = async (m, { conn, text, command }) => {
    try {
        if (!text) throw new Error(`Membuat gambar dari AI.\n\nContoh:\n.${command} Wooden house on snow mountain\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`);
        
        await m.reply(wait)
        const resp = await imagegen(text)
        for (let ihh of resp){

          conn.sendFile(m.chat, ihh, 'image.png', ``, m)
      }
      await m.reply(`Done\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi minimal 1k untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`)
        // Or use conn.reply:
        // conn.reply(m.chat, `Done\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi minimal 1k untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`, m);
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}

handler.help = ['ai-image']
handler.tags = ['internet']
handler.exp = 0;
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img)$/i 

export default handler;
    
async function imagegen(prompt) {
    return new Promise((resolve, reject) => {
        axios.get('https://image.tamsisxcode.repl.co/generate/'+encodeURIComponent(prompt))
              .then(({ data }) => {
                if (data.result) {
                    resolve(data.result);
                } else {
                    reject(data.data);
                }
            })
    })
}