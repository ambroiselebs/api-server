# API-server 

## 💽 Installation
```
$ git clone https://github.com/ambroiselebs/api-server.git
$ cd api-server/
$ npm install
$ npm run serve
```

## 💻 Configuration

### Connection to the database : 
The database connection is done in a json file in `./resources/config.json` in the section "db"
```
host = the ip of your database
user = the username that you will use
password = the password of the username
database = the database that you will work with
```

### Create a route

The routes are defined in the file located in `./resources/routes.js`
An exemple is given

### Configure the server

All configuration for the server is in te file `./resources/config.json` in the section

## 📚 Library 

For this project I'm using : 
```
express
mysql2
body-parser
perf_hooks
nodemon
```

## ❓ How does it works ?

First of all you create a route (a new page) and in this page you execute an sql query that will redirect a json and then you just need to make a api request from your project to use this json

## ☕ Author

    - ambroiselebs

