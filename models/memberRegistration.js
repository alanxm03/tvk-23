const mongoose=require('mongoose');


var member=new mongoose.Schema({
    

    name:{
        type:String,
        required:true
        
    },
    fatherName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    whatsapp:{
        type:Number,
        required:true
    },
    email:{
        type:String
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    positionDesc:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('TVKMEMBERS',member)