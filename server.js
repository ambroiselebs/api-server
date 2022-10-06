const mysql = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const { performance } = require('perf_hooks');


//----------------------- Configure the Server -----------------------//
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
//----------------------- END -----------------------//


//----------------------- DataBase -----------------------//
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apiserver"
})
db.connect()
//----------------------- END -----------------------//


//----------------------- Routes -----------------------//
//Default Route /
app.get('/', function(req, res) {
    
    return res.send({ error: true, message: 'Hello world!' })
})

//Exemple : Select all users
app.get('/all', function(req, res) {

    db.query('SELECT * FROM users', function(error, result, fields) {
        if (error) throw error
        return res.send({ data: result })
    })
})
//----------------------- END -----------------------//


//----------------------- Run the server -----------------------//
var startTime = performance.now()
app.listen(3000, function(){
    console.log('\x1b[0m');
    var endTime = performance.now()
    console.log('\x1b[32m\x1b[1mAPI-SERVER \x1b[0m\x1b[32mv1.0.0  \x1b[37m\x1b[2mready in \x1b[0m\x1b[37m\x1b[1m'+(endTime-startTime)+'\x1b[37m\x1b[2m\x1b[0m ms\x1b[0m');
    console.log('');
    console.log('\x1b[32m➜  \x1b[37m\x1b[1mHostname:    \x1b[0m\x1b[36mhttp://localhost/');
    console.log('\x1b[32m➜  \x1b[37m\x1b[1mPort:        \x1b[0m\x1b[36m3000');
    console.log('\x1b[32m➜  \x1b[37m\x1b[1mURL:         \x1b[0m\x1b[36mhttp://localhost:\x1b[1m3000\x1b[0m\x1b[36m/');
    console.log('');
    console.log('\x1b[37m\x1b[2mMade by ambroiselebs\x1b[37m\x1b[0m');
})
module.exports = app;
//----------------------- END -----------------------//