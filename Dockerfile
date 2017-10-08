FROM node:latest

WORKDIR /container
ADD . /container

EXPOSE 8080

CMD ['npm', 'start']
