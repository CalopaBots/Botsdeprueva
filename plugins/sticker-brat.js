import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('caliphdev', '/api/brat', { text: encodeURIComponent(teks) }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()

}
handler.help = ['brat <teks>']
handler.tags = ['sticker']
handler.command = /^brat$/i
export default handler
