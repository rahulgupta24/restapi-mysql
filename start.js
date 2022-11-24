const express = require('express')
//const connection = require('./sqlconnector')
const myrouter = require('./routes/router')
const app =express()
var port = 1234

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/library',myrouter)


app.listen(port,()=>{
    console.log('Server started')
})


 