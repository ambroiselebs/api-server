import {db} from '../db.js'
import fs from 'fs'

let rowData = fs.readFileSync('./src/config.json')
let config = JSON.parse(rowData)

export const all  = (req, res,) => {

    if (req.params.token == config.server.token)
    {
        
        db.query('SELECT * FROM items', function(err, result) {
            if (err) throw err
            return res.send({data:result})
        })

    } else {
        return res.send({data:"invalidAPItoken"})
    }

}