const methodOverride = require('method-override')
const express = require('express')
const route = express.Router()
const {connection} = require('./connection') 
const {countData , allUser ,userEdit ,patchUser} = require('./controller')
route.use(methodOverride('_method'))
route.route('/').get(countData)
route.get('/user',allUser)

route.get('/user/edit/:id/',userEdit)
route.patch('/user/edit/:idd/',patchUser)
module.exports = {route}
