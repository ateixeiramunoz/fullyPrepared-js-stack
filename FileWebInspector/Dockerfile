FROM ubuntu:18.04
MAINTAINER nobodyguy "no.body@guy.com"
RUN apt-get update -y
RUN apt-get install dnsutils net-tools nginx ufw sudo supervisor -y
RUN sudo ufw default allow incoming
RUN sudo rm /etc/nginx/nginx.conf
COPY conf/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT sudo nginx -c /etc/nginx/nginx.conf -g 'daemon off;'
