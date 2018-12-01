import * as WebTorrent from 'webtorrent';
const Telegraf = require('telegraf');
const SocksAgent = require('socks5-https-client/lib/Agent');

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const proxyHost = process.env.PROXY_HOST;
const proxyPort = process.env.PROXY_PORT;
const proxyLogin = process.env.PROXY_LOGIN;
const proxyPassword = process.env.PROXY_PASSWORD;

if (!botToken) {
    throw new Error('Bot token is not defined');
}

if (!chatId) {
    throw new Error('Chat id is not defined');
}

let telegrafBot;
const torrentCli = new WebTorrent();

if (proxyHost && proxyPort && proxyLogin && proxyPassword) {
    const socksAgent = new SocksAgent({
        socksHost: proxyHost,
        socksPort: proxyPort,
        socksUsername: proxyLogin,
        socksPassword: proxyPassword,
    });

    telegrafBot = new Telegraf(botToken, {
        telegram: { agent: socksAgent }
    });
} else {
    telegrafBot = new Telegraf(botToken);
}

const loadCommand = '/load';

telegrafBot.catch((err) => {
    console.log('Ooops', err)
})
telegrafBot.on('text', (ctx) => {
    const text = ctx.update.message.text;

    if (text.startsWith(loadCommand)) {
        const magnetLink = text.slice('/load'.length).trim();

        if (magnetLink.startsWith('https://') || magnetLink.startsWith('http://')) {
            telegrafBot.telegram.sendMessage(chatId, `Cannot load from torrent file link :(`);
            return;
        }
        console.log('Magnet link: ', magnetLink);
        loadTorrent(magnetLink);
    }
})
telegrafBot.on('document', (ctx) => {
    const fileId = ctx.update.message.document.file_id;
    console.log('FileId: ', fileId);

    telegrafBot.telegram.getFileLink(fileId)
        .then((fileLink: string) => {
            console.log('File link: ', fileLink);
            loadTorrent(fileLink);
        });
});
telegrafBot.command('help', (ctx) => ctx.reply('help commands will be implemented'));
telegrafBot.startPolling();

function loadTorrent(torrentId: string): void {
    torrentCli.add(torrentId, {path: __dirname + '/media'}, function (torrent) {
        torrent.files.forEach(element => {
            telegrafBot.telegram.sendMessage(chatId, `Start loading: ${element.name}`);
            console.log(element.name);
        });

        torrent.on('ready', () => {
            console.log('torrent ready');
        })

        torrent.on('error', (err) => {
            console.log('load error');
            telegrafBot.telegram.sendMessage(chatId, `Error while loading`);
        })

        torrent.on('done', () => {
            console.log('torrent finished downloading')
            torrent.files.forEach(function(file){
               // do something with file
               telegrafBot.telegram.sendMessage(chatId, `Loading finished: ${file.name}`);
            })
        });

        torrent.on('download', (bytes) => {
            // console.log('just downloaded: ' + bytes)
            // console.log('total downloaded: ' + torrent.downloaded)
            // console.log('download speed: ' + torrent.downloadSpeed)
            // console.log('progress: ' + torrent.progress)
        });
      })
}