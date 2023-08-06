const routes=require('express').Router()
const memberModel=require('../models/memberRegistration')

routes.post('/',async(req,res)=>{
    let data={
        "name":req.body.name,
        "fatherName":req.body.fatherName,
        "gender":req.body.gender,
        "dob":req.body.dob,
        "country":req.body.country,
        "contact":req.body.contact,
        "whatsapp":req.body.whatsapp,
        "email":req.body.email,
        "state":req.body.state,
        "district":req.body.district,
        "area":req.body.area,
        "position":req.body.position,
        "positionDesc":req.body.positionDesc,
        "address":req.body.address,
    }
    // console.log(data);
    try{
        const ifExist = await memberModel.findOne({contact:data.contact});
        if(!ifExist){
            let saveMember=await memberModel.create(data)
            // res.status(200).json(saveMember)
            res.status(200).json({data:"Saved to DataBase"})
            
        }else{
            res.status(500).json({message: 'Data Exisits'})
        }
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({message: e.message})
    } 
})

module.exports=routes