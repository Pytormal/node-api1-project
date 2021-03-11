// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model.js')

// instance of the express app
const server = express()

// global middleware
server.use(express.json)


////////// end points //////////

// [Get]

// [Get]:id

// [Get] all

// [Post] create

// [Put] update

// [Delete] remove




// expose server
module.exports = server; // EXPORT YOUR SERVER instead of {}
