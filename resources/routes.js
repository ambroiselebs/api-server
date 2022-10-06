
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


}
module.exports = { routes }