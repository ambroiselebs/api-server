
function routes(app, db) {


    //Default route
    app.get('/', function(req, res) {
    
        return res.send({ error: true, message: 'Hello world!' })
    })
    
    //Exemple : Select all users
    app.get('/all', function(req, res) {
    
        db.query('SELECT * FROM items', function(error, result, fields) {
            if (error) throw error
            return res.send({ data: result })
        })

    })

    //Exemple : Route with parameters
    app.get('/test/:id', function(req, res) {

        db.query('SELECT * FROM items WHERE i_id LIKE '+req.params.id, function(err, rslt) {
            if (err) throw err
            return res.send({ data: rslt })
        })

    })


}
module.exports = { routes }