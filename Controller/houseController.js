const House = require('../model/house')

exports.createHouse = async(req,res)=>{
    
    const house = new House({
        HouseNo:req.body.HouseNo,
        Housename:req.body.Housename,
        color:req.body.color,
        
    })
    

    try{
       

        const a1 =await house.save()
        res.json(a1)


    }
    catch(err){
        res.send('error'+err)
    }

}

exports.updateHouse = async(req,res)=>{
    try{
        const house = await House.findById(req.params.id)
        house.Housename = req.body.Housename
        house.color = req.body.color
        
        const a1 = await house.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.deleteHouse =async(req,res)=>{
    try{
        const house = await House.findByIdAndRemove(req.params.id)
        res.send("Record Deleted")

        

    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.getById = async(req,res)=>{
    try{
        const house = await House.findById(req.params.id)
        res.json(user)
    }
    catch(err){
    res.send("Error"+err)
    }
}

exports.getAll = async(req,res)=>{
    try{
        const houses = await House.find()
        res.json(houses)
    }
    catch(err){
    res.send('Get Requested')
    }
}