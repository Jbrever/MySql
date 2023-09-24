const express = require('express')
const route = express.Router()
const {connection} = require('./connection') 
const {countData , allUser} = require('./controller')
route.get('/',countData).get('/user',allUser)

module.exports = {route}