FROM node:latest

WORKDIR /container
ADD . /container

EXPOSE 8080

ENV NODE_ENV production

CMD ['npm', 'start']
