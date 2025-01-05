# Linux Install

> ssh -> login

> apt update && apt upgrade

# New User

> root@ :~# whoami
>
> # add user cmd
>
> adduser XXX

# add User to Sudo group

> usermod -aG sudo XXX

# check groups where user is in

> groups XXX

## Login as new User

> su - XXX -> XXX@localhost:~$

### Software

> https://github.com/nodesource/distributions

# install Curl

> sudo apt-get install -y curl

## install Node js 22

> curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh

> sudo -E bash nodesource_setup.sh

> node --version, npm -- version

### Make Apps directory

> mkdir apps, cd apps

## Clone Git

> xxx@localhost:~/apps$ git clone https://github.com/samedan/2412_mern_jwt_redux_traversy.git

> ls -> cd ...

> ls -a

## Environments Variables

> @localhost/app/folder> touch .env

#

> nano .env

> cat .env

### Install dependencies

> @localhost/app/folder> npm i

> @localhost/app/folder/FRONTEND> npm i

# Run build for frontedn folder

> @localhost/app/folder/FRONTEND> npm run build

### Mongo DB add server IP

# test Db connection

> @localhost/app/folder> npm start

### PROXY

# PM2 Process Manager

> @localhost/app/folder> sudo npm i -g pm2

> @localhost/app/folder> pm2 start backend/server.js

> ![deploy](https://github.com/samedan/2412_mern_jwt_redux_traversy/blob/main/public/images/02_printscreen.jpg)

### Firewall

> sudo ufw enable

# Allow Ports fo Http HttpS SSH

> sudo ufw allow ssh, http, https

### NGINX

> sudo apt install nginx

# Default website url on NGINX

> sudo nano /etc/nginx/sites-available/default

```
location / {
  proxy_pass http://localhost:5000;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
}
```

> sudo service nginx restart

# Veryfy NGINX congfi file

> sudo nginx -t

> pm2 list

> sudo systemctl start nginx

> sudo systemctl restart nginx
