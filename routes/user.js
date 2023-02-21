const express = require('express')
const { ReturnDocument } = require('mongodb')
const { model } = require('mongoose')
 const User = require('../model/user')
const router = express.Router()

const{
    createUser,
    updateUser,
    deleteUser,
    getById,
    getAll
}= require('../Controller/userController')

const {validateUserSignUp,userValidation} = require('../validation/userValidation')

router.get('/getAllUser',getAll)



router.post('/user',createUser,validateUserSignUp,userValidation)



router.get('/getUser/:id',getById)


router.patch('/user/:id',updateUser,validateUserSignUp,userValidation)



router.delete('/user/:id',deleteUser)

module.exports=router;