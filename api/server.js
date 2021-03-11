// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model.js')

// instance of the express app
const server = express()

// global middleware
server.use(express.json)

// export server
module.exports = server; // EXPORT YOUR SERVER instead of {}
