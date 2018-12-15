media-torrent-bot

## Instalation 

### for development
`npm install`

starting

`npm start`

### for usage

* With `Docker`
define your variables in `docker-compose.yml`
```
      - BOT_TOKEN=**********
      - CHAT_ID=**********
      - PROXY_HOST=**********
      - PROXY_PORT=**********
      - PROXY_LOGIN=**********
      - PROXY_PASSWORD=**********
```
start application with `docker-compose up -d`

* With `PM2`

install `nodejs`

install packages `npm install`

define your variable in `process.yml`
```
    BOT_TOKEN: *************
    CHAT_ID: *************
    PROXY_HOST: *************
    PROXY_PORT: *************
    PROXY_LOGIN: *************
    PROXY_PASSWORD: *************
```

start application with `npm run start:service`
stop with `npm run stop:service`

