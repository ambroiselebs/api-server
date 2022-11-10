import fs from 'fs'
import mysql from 'mysql2'

let rowData = fs.readFileSync('./src/config.json')
let bddInfos = JSON.parse(rowData)

const db = mysql.createConnection({
    connectionLimit: bddInfos.db.connectionLimit,
    host: bddInfos.db.host,
    user: bddInfos.db.user,
    password: bddInfos.db.password,
    database: bddInfos.db.database,
    connectTimeout: bddInfos.db.connectTimeout,
    waitForConnections: bddInfos.db.waitForConnections,
    queueLimit: bddInfos.db.queueLimit
})
db.connect()
export {db}