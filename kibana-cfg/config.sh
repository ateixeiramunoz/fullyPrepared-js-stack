
until $(curl --output /dev/null --silent --head --fail http://kibana:5601/status); do
    echo "Waiting"
    sleep 2
done

until $(curl -X POST --output /dev/null  http://kibana:5601/api/saved_objects/_import -H "kbn-xsrf: true" --form file=@export.ndjson); do
    echo "POSTING"
    sleep 2
done
