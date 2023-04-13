const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const houseRouter = require('./routes/house')
const UserRouter = require('./routes/user')
const app= express();
const cors=require("cors");
const port = 4000;



const url ='mongodb://localhost/27017'

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

app.use(express.json());
app.use(cors(corsOptions))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(houseRouter)
app.use(UserRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)

})