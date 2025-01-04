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
