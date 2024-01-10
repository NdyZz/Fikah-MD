import axios from 'axios';
import cheerio from "cheerio";
import https from "https";

function convertAngka(number) {
    const data = String(number).split('').reverse()
    let combine = ''
    for (let i = 0; i < data.length; i++) {
        if ((i + 1) % 3 == 0 && i != data.length - 1) {
            data[i] = `.${data[i]}`
        }
    }
    combine = `${data.reverse().join('')}`
    return combine
}

async function trustpositif(url) {
  if(!url) return false
  let agent = new https.Agent({ rejectUnauthorized: false })
  url = Array.isArray(url) ? encodeURIComponent(url.join("\n")) : url
  let { data } = await axios({
    "url": "https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home",
    "method": "POST",
    "httpsAgent": agent,
    "data": {
      "name": url,
    }
  })
  let result = {}
  for(let i of data.values) {
    result[i.Domain] = i.Status === "Ada"
  }
  return result
}

async function clean(data) {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function Tiktok(query) {
 let result = {}
 let response = await axios("https://lovetik.com/api/ajax/search", {
  method: "POST",
  data: new URLSearchParams(Object.entries({ query })),
 });

 result.creator = "YNTKTS";
 result.title = await clean(response.data.desc);
 result.author = await clean(response.data.author);
 result.nowm = await shortener(
  (response.data.links[0].a || "").replace("https", "http")
 );
 result.watermark = await shortener(
  (response.data.links[1].a || "").replace("https", "http")
 );
 result.audio = await shortener(response.data.cover);
 return result;
}

export {
  Tiktok,
  trustpositif
}
