docker stack rm demo
docker-compose --file docker-compose.yml --env-file dev.env build --force-rm --pull --q --parallel
docker stack deploy -c ./docker-compose.yml demo