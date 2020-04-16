# fullyPrepared-js-stack


A Complete full-stack solution for working with JS. 


## Installation

- Clone the application
- Enter the directory `cd fullyPrepared-js-stack`
- Execute `docker swarm init` to ensure you have docker swarm ready.



## LOCAL Execution for development

> The deploy process will ask you to share some directories inside the project. Accept them for a proper work.

On Windows:
```
docker-compose --file .\Compose-LOCAL\docker-compose-local.yml build --force-rm

docker stack deploy -c  .\Compose-LOCAL\docker-compose-local.yml -c .\Compose-LOCAL\local-config.yml demo
```

On Linux:
```
docker-compose --file ./Compose-LOCAL/docker-compose-local.yml  build --force-rm

docker stack deploy -c ./Compose-LOCAL\docker-compose-local.yml -c ./Compose-LOCAL\local-config.yml demo
```


## AVALIABLE URLS UNDER DEVELOPMENT

Check all the URLs available after deploying your first dev copy

- Frontend -> http://127.0.0.1:4200
- Backend -> http://127.0.0.1:3000
- Database Admin -> http://127.0.0.1:8081 (admin/password)


> The Frontend directory auto-updates changes from your local and updates the running app-
> The backend auto update is stil under development
> The database data will be stored under a `mongodata` dir inside the project.
 

## LOGGING UNDER DEVELOPMENT

- You will be able to access container logs under


```
docker ps
docker logs {CONTAINER_ID}
```




## STOPPING THE SWARM

```
docker stack rm demo
```


You will also able to tweak some options for the containers in the `Compose-LOCAL/DEV.env` file


