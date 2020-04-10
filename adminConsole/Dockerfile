FROM node:12.2.0
RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . .
RUN cd /usr/src/app
RUN npm install
