FROM alpine
RUN apk update
RUN apk add curl
EXPOSE 5601
COPY . .
ENTRYPOINT ./config.sh