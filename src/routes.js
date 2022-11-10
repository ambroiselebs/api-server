import { index } from "./controllers/HomeController.js"
import { all } from "./controllers/AllController.js"

export function routes(app, fs) {

    //Default route
    app.get('/', index)

    //Select all items from by database
    app.get('/:token/all', all)
}