while [[ "$(curl -s http://127.0.0.1:5601/status)" != "200" ]]; do
	  echo "Waiting for kibana..."
	  sleep 1
done

curl POST -X --url "http://127.0.0.1:5601/api/kibana/saved_objects/_bulk_get" -H 'kbn-xsrf:true' -H 'Content-type:application/json' -d @export.ndjson
