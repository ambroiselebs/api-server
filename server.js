import bodyParser from 'body-parser';
import express from 'express'

import { routes } from './src/routes.js';
import { run } from './resources/run.js';

import fs from 'fs'


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


//----------------------- Routes -----------------------//
routes(app, fs) //Edit them in | ./src/routes.js |
//----------------------- END -----------------------//


//----------------------- Run the server -----------------------//
run(app, fs)
//----------------------- END -----------------------//