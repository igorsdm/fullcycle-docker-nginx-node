FROM node:lts

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y vim

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]


