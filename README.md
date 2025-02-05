# keycloak-angular-passkey

## Pre requirement tools
You also need to have `docker` install into your machine, because without it you can't run the docker-compose file

## Keycloak admin UI
To start the keycloak admin console, you first need to run the docker compose file with following command on a terminal.
> docker compose up -d

After all containers inside the docker-compose file are successful installed and started, open a browser and enter following URL
1. > http://localhost:9090/
2. > The pair username/password is `admin/keycloak`

## Keycloak configuration

Wenn starting the docker compose, the keycloak_admin_ui container instance is created with the keycloak configuration file under the folder
`keycloak/configuration/passkey-realm-and-client-export.json`.
Inside the configuration file, new  *`realm`*  **_passkey_**  and the *`client`* **_passkey-client_**   are created after the mount, you can as well create a new user in your dedicated realm for example,
1. Users and pwd for the realm "passkey"
   1. | User                 | pwd         |
      |----------------------|-------------|
      | assah   | admin12    |

## Important links
1. [keycloak repo](https://github.com/keycloak/keycloak/tree/main)
2. [How to configure theme](https://www.keycloak.org/docs/latest/server_development/index.html#configuring-a-theme)

## Actuator

Get health status

`curl http://localhost:8080/actuator/health`


