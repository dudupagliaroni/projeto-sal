const express = require('express')
const routes = require('./routes/routes')
const {request} = require("express");
const app = express()
const port = 3000
const connection = require('./database/connection')

app.use(routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    try {
        connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

