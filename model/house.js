const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({

    HouseNo:{
        type:Number,
        required:[true,"Please enter a Housenumber"],
        unique:true
    },
    Housename:{
        type:String,
        required:[true,"Please Enter a name"],
       
        
       
           
        }
    ,
    color:{
        type:String,
        required:[true,"Please add a color"],
       
    },
    
    },
    {
        timestamps:true,
    }
)

module.exports=mongoose.model('House',houseSchema)