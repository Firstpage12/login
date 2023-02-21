const Users = require('../model/user')

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
}