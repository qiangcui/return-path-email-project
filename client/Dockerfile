FROM node:8-alpine

MAINTAINER Paul Cui "paulcui0618@gmail.com"

RUN apk add --no-cache curl

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./public /app/public
COPY ./src /app/src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]