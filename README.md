# fullyPrepared-js-stack


A Complete full-stack solution for working with JS. 


## Installation

- Clone the application
- Enter the directory `cd fullyPrepared-js-stack`
- Execute `docker swarm init` to ensure you have docker swarm ready.



## Execution

On Windows:
```
docker-compose --file docker-compose.yml  build --parallel --force-rm

docker stack deploy -c ./docker-compose.yml -c ./docker-compose-dev-WINDOWS.yml -c ./docker-compose-logging-dev.yml -c ./docker-compose-swarm.yml demo
```

On Linux:
```
docker-compose --file ./docker-compose.yml  build --force-rm

docker stack deploy -c ./docker-compose.yml -c ./docker-compose-dev-LINUX.yml -c ./docker-compose-logging-dev.yml -c ./docker-compose-swarm.yml demo
```

## STOPPING THE SWARM


```
docker stack rm demo
```




## AVALIABLE URLS

Check all the URLs available after deploying your first dev copy

- Frontend -> http://127.0.0.1
- Backend -> http://127.0.0.1:3000
- File Inspector -> http://127.0.0.1:8080
- Database Admin -> http://127.0.0.1:8081 (username/password)
- Kibana (logs) -> http://127.0.0.1:5601


You will also able to tweak some options for the containers in the `DEV.env` file


- ENV_NAME=DEV
- CONFIG_FILE_NAME=DEV.env
- ME_CONFIG_BASICAUTH_USERNAME=username
- ME_CONFIG_BASICAUTH_PASSWORD=password

- ME_CONFIG_MONGODB_PORT=27017
- ME_CONFIG_MONGODB_ADMINUSERNAME=root
- ME_CONFIG_MONGODB_ADMINPASSWORD=example
- ME_CONFIG_MONGODB_ADMINUSERNAME=root
- ME_CONFIG_MONGODB_ADMINPASSWORD=example

- ELASTIC_NODE_NAME=HEYJUDE
- ELASTIC_DISCOVERY_TYPE=single-node
- ELASTIC_BOOTSTRAP_MEMORY_LOCK=false
- ELASTIC_ES_JAVA_OPTS=-Xms256m -Xmx256m
