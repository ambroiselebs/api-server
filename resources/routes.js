
function routes(app, db, fs) {

    //Get JSON info
    let configInfo = fs.readFileSync('./resources/config.json')
    let config = JSON.parse(configInfo)


    //Default route
    app.get('/', function(req, res) {
    
        return res.send({ error: true, message: 'Hello world!' })
    })
    
    //Exemple : Select all users
    app.get('/:token/all/', function(req, res) {
    
        if (req.params.token == config.server.token) //Check the API token
        {
            db.query('SELECT * FROM items', function(error, result) {
                if (error) throw error
                return res.send({ data: result })
            })
        } else {
            return res.send({ error: true, message: 'Wrong API token' })
        }

    })

    //Exemple : Route with parameters
    app.get('/:token/test/:id', function(req, res) {

        if (req.params.token == config.server.token) //Check the API token
        {
            db.query('SELECT * FROM items WHERE i_id LIKE '+req.params.id, function(err, rslt) {
                if (err) throw err
                return res.send({ data: rslt })
            })
        } else {
            return res.send({ error: true, message: 'Wrong API token' })
        }

    })


}
module.exports = { routes }