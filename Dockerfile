FROM node:latest

WORKDIR /container

COPY package.json .
RUN npm install
COPY . .

EXPOSE 8080

ENV NODE_ENV production

CMD [ "npm", "start" ]
