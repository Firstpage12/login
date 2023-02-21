const express = require('express')
const { ReturnDocument } = require('mongodb')
const { model } = require('mongoose')
 const User = require('../model/user')


  const  validateToken = require("../middleware/validateTokenHandler")
const router = express.Router()

const{
    createUser,
    updateUser,
    deleteUser,
    getById,
    getAll,
    registerUser,
    CurrentUser,
    LoginUser,
}= require('../Controller/userController')

const {validateUserSignUp,userValidation} = require('../validation/userValidation')

router.get('/getAllUser',getAll)



router.post('/user',createUser,validateUserSignUp,userValidation)



router.get('/getUser/:id',getById)


router.patch('/user/:id',updateUser,validateUserSignUp,userValidation)



router.delete('/user/:id',deleteUser)

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.get("/current", validateToken,CurrentUser);

module.exports=router;