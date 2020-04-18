FROM node:12.2.0
RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
COPY . .
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh
RUN npm install