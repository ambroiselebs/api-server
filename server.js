const mysql = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const { performance } = require('perf_hooks');

const route = require('./resources/routes.js')
const runServer = require('./resources/run.js')

const fs = require('fs')


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
let rowData = fs.readFileSync('./resources/config.json')
let bddInfos = JSON.parse(rowData)

const db = mysql.createConnection({
    host: bddInfos.db.host,
    user: bddInfos.db.user,
    password: bddInfos.db.password,
    database: bddInfos.db.database
})
db.connect()
//----------------------- END -----------------------//


//----------------------- Routes -----------------------//

route.routes(app, db, fs) //Edit them in | ./resources/routes.js |

//----------------------- END -----------------------//


//----------------------- Run the server -----------------------//
runServer.run(app, fs)
module.exports = app;
//----------------------- END -----------------------//