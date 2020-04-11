docker stack rm demo
Start-Sleep -s 5
docker-compose --file docker-compose.yml --env-file dev.env build --force-rm --pull --q --parallel
Start-Sleep -s 5
docker stack deploy -c ./docker-compose.yml demo
Start-Sleep -s 10