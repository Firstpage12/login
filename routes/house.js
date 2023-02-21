const express = require('express')
const { ReturnDocument } = require('mongodb')
const { model } = require('mongoose')
 const House = require('../model/house')
const router = express.Router()

const{
    createHouse,
    updateHouse,
    deleteHouse,
    getById,
    getAll
}= require('../Controller/houseController')



router.get('/getAll',getAll)



router.post('/house',createHouse)



router.get('/house/:id',getById)


router.patch('/house/:id',updateHouse)



router.delete('/house/:id',deleteHouse)

module.exports=router;