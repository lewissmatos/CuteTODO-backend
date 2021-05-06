const express = require('express')
require('colors')

const {dbConnection} = require ('../db/config.database')
const usersRoute = require('../routes/users.routes');

class Server {

    constructor(){
        this.app = express()

        this.dbConnection()

        this.port = process.env.PORT;

        this.usersPath = '/api/users'

        this.routes()
    }
    
    async dbConnection(){
        await dbConnection()
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server at ${this.port}`.brightCyan));
    }

    routes(){
        this.app.use(express.json())
        this.app.use(this.usersPath, usersRoute);
    }
}

module.exports = Server