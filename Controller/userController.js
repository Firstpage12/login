const Users = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config()
exports.createUser = async(req,res)=>{
    
    const user = new Users({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    

    try{
       

        const a1 =await user.save()
        res.json(a1)


    }
    catch(err){
        res.send('error'+err)
    }

}

exports.updateUser = async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id)
        user.name = req.body.name
        user.email = req.body.email
        user.role =req.body.role
        const a1 = await user.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.deleteUser =async(req,res)=>{
    try{
        const user = await Users.findByIdAndRemove(req.params.id)
        res.send("Record Deleted")

        

    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.getById = async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id)
        res.json(user)
    }
    catch(err){
    res.send("Error"+err)
    }
}

exports.getAll = async(req,res)=>{
    try{
        const users = await Users.find()
        res.json(users)
    }
    catch(err){
    res.send('Get Requested')
    }
};



exports.registerUser = asyncHandler(async (req, res) => {
    const { id,name, email, password ,role} = req.body;
    if (!id||!name || !email || !password||!role) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await Users.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await Users.create({
        id,
      name,
      email,
      password: hashedPassword,
      role
    });
    if(user){
      res.status(201).json({id:user.id,email:user.email})
  }
  else{
      res.status(400)
      throw new Error("User data is not valid");
  }
  
  
  
  
  })
  
  //@desc LoginUser
  //@route POST/student/login
  //@access public
  exports.LoginUser = asyncHandler(async (req, res) => {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
      const user = await Users.findOne({ email });
      //compare password with hashedpassword
      if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
          {
            user: {
              name: user.name,
              email: user.email,
              id: user.id,
              role:user.role
            },
          },
          process.env.ACCESS_TOKEN_SECERT,
          { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
      } else {
        res.status(401);
        throw new Error("email or password is not valid");
      }
    });
  //@desc CuurentUser
  //@route GET/student/current
  //@access private
  
  exports.CurrentUser = asyncHandler(async(req,res)=>{
  res.json(req.user);
  });
  

  