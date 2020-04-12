FROM alpine
RUN apk update
RUN apk add curl
EXPOSE 5601
COPY . .
ENTRYPOINT until $(curl -X POST --output /dev/null  http://kibana:5601/api/saved_objects/_import -H "kbn-xsrf: true" --form file=@export.ndjson); do echo "POSTING"; sleep 2; done