const express = require('express')
const app = express();
const {connection} = require('./connection')
const {route} = require('./user-route')
const port = process.env.PORT || 9000

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.use('/',route)
app.listen(port,()=>{
    console.log('server started at port num-: ',port)
})
