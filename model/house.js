const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

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

module.exports=mongoose.model('User',userSchema)