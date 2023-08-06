const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors = require('cors');
const serverless=require('serverless-http');  //serverless-http

require('dotenv').config()
var path = require('path')
const bodyParser=require('body-parser')
app.use(bodyParser.json());




app.use(express.urlencoded({extended:true}))


//setting up routes for frontend
app.use(cors());

app.use(express.static("public"));
//index
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

//party
app.get('/party',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/party.html"))
})

//leader
app.get('/leader',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/leader.html"))
})

//download leader image
app.get('/pathiverakam',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/download.html"))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/contact.html"))
})

//memberreg

app.get('/registerMember',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/memberForm.html"))
})




const uri = 'mongodb+srv://TVKADMIN:'+process.env.MONGODB_PASSWORD+'@cluster0.n9ztzxt.mongodb.net/TVK?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( ()=> {
    console.log("Connected to Atlas!");
}).catch((e) =>{
    console.log("Error",e)
});

const memberRegistration=require('./controllers/memberRegistration')

app.use('/registermember',memberRegistration)


module.exports.handler=serverless(app);