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
The database connection is done from the line 21 to 27
```
host = the ip of your database
user = the username that you will use
password = the password of the username
database = the database that you will work with
```

### Create a route

The route are creating in the section called "Routes"
You have an exemple if needed

## 📚 Library 

For this project I'm using : 
```
express
mysql2
body-parser
perf_hooks
```

## ❓ How does it works ?

First of all you create a route (a new page) and in this page you execute an sql query that will redirect a json and then you just need to make a api request from your project to use this json

## ☕ Author

    - ambroiselebs

