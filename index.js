const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const houseRouter = require('./routes/house')
const UserRouter = require('./routes/user')
const app= express();

const port = 4000;



const url ='mongodb://localhost/house'



mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

app.use(express.json());
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(houseRouter)
app.use(UserRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)

})