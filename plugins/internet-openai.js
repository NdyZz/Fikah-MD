// by NdyZz
// https://github.com/NdyZz

import axios from 'axios';
let userAgentList = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/98.0.1108.43",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.4567.89 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.7654.32 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:12.0) like Gecko"
]

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Halo?`);

    let ua = userAgentList[Math.floor(Math.random() * userAgentList.length)]
    let url = 'https://free-api.cveoy.top/v3/completions'
    const head = {"Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "Content-Type": "application/json",
            "Origin": "https://ai201.chagpt.fun",
            "Referer": "https://ai201.chagpt.fun/",
            "Sec-Ch-Ua-Mobile": "?1",
            "Sec-Ch-Ua-Platform": "Windows",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": ua}
    let form = {"prompt" : `${text}`}
    let res = await axios({
     url,
     method: "POST",
     data: form,
     headers: head
    })
    let result = res.data
    let hasil = result ? result.replace('欢迎使用公益站! 站长合作邮箱：wxgpt@qq.com','Openai by NdyZz') : 'apikey expired\ncoba lagi nanti';

    conn.reply(m.chat, `${hasil}`, fkontak);

  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
}

handler.command = /^(ai|openai|chatgpt)$/i;
handler.help = ["ai", "openai", "chatgpt"].map(v => v + " <teks>");
handler.tags = ["internet"];
handler.fail = null;

handler.limit = true;
handler.exp = 0;

export default handler;
