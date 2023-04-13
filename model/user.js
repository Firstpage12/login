const mongoose = require('mongoose')
const validator =require('validator')


const userSchema = new mongoose.Schema({

    id:{
        type:Number,
           required:true,
             unique:true
    },
    name:{
        type:String,
        required:[true,"Please Enter a name"],
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("name invalid")
            }
        
       
           
        }
       
           
        }
    ,
    email:{
        type:String,
        required:[true,"Please add a email"],
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid");
            }
            
        }
        
            
        }
    ,
    password:{
        type:String,
        required:[true,"Please enter a password"],
        validate(value){
            if (!validator.isStrongPassword(value, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
              })) {
                throw new Error("Password is invalid");
                
              } 
            }
           
           
    }

    ,
    role:{
        type:String,
        required:[true,"Please enter a role"],
        // validate(value){
        //     if(!validator.isAlpha(value)){
        //         throw new Error("role invalid")
        //     }
        
       
           
        }
    },

    {
        timestamps:true,
    }
)

module.exports=mongoose.model('Users',userSchema)