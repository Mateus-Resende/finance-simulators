FROM node:9.11.2

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

CMD 'node'
