FROM node:10
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
ENTRYPOINT node ./dist/index.js