const express = require('express')
const cors = require ('cors');
require('colors')

const {dbConnection} = require ('../db/config.database')
const usersRoute = require('../routes/users.routes');
const grandfatherRoute = require('../routes/gf.routes')
class Server {

    constructor(){
        this.app = express()

        this.dbConnection()

        this.port = process.env.PORT;

        this.usersPath = '/api/users'
        this.gfPath = '/api/grandfathers'

        this.middlewares()

        this.routes()
    }
    
    async dbConnection(){
        await dbConnection()
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server at ${this.port}`.brightCyan));
    }

    routes(){
        this.app.use(this.usersPath, usersRoute);
        this.app.use(this.gfPath, grandfatherRoute);
    }

    middlewares(){
        this.app.use(   cors()  );

        //Lecturay prseo del body
        this.app.use(  express.json()  );
    }
}

module.exports = Server