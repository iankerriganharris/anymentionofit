FROM node:10-alpine
LABEL maintainer "Ian Harris <iankerriganharris@gmail.com>"

# add bash for wait-for-it utility
RUN apk add --no-cache bash

# create app directory
RUN mkdir /app
WORKDIR /app

# install node modules
COPY package.json /app
COPY package-lock.json /app
RUN npm install

# add wait-for-it utility
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY docker-entrypoint.sh /app
COPY tsconfig.json /app
COPY tslint.json /app
COPY nodemon.json /app
COPY nodemon-debug.json /app
COPY webpack.config.js /app

# start dev server
ENTRYPOINT ["sh", "docker-entrypoint.sh"]