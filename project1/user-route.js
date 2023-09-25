const express = require('express')
const route = express.Router()
const {connection} = require('./connection') 
const {countData , allUser ,userEdit ,patchUser} = require('./controller')
route.route('/').get(countData)
route.get('/user',allUser)

route.get('/user/edit/:id/',userEdit)
route.post('/user/edit/:id/',patchUser)
module.exports = {route}
