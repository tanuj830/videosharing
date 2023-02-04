const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const UserModel = require("../models/UserSchema")
const cookie = require("cookie-parser")


// Validating user
router.post("/", async(req,res)=>{


   const user = await UserModel.findOne({email: req.body.email})


    if(user)
    {
        if(req.body.password === user.password)
        {
            res.status(201).send(user)
        }
        
        else
        {
            res.status(404).send("fill right credentials")
        }
    }
    
    else{
        res.status(404).send("user not found")
    }
})
 


// Registering user
router.post("/register", async(req,res)=>{

   const userexist = await UserModel.findOne({email: req.body.email}).catch(err=>console.log(err))

   if(!userexist)
   {

    const saltRounds = 10
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, async function(err, hash) {
            
            // const hashPassword = hash;
            const User = await UserModel({name : req.body.name,  email : req.body.email, password : hash})
            User.save().then(res.status(200).send("user added")).catch(err=>console.log(err))
    
        });
      });
    

    }
    else{
        res.status(404).send("user already exist")
    }
})


router.get("/:id", async(req,res)=>{

    try{
        
     await UserModel.find({_id:req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err))
     
    }catch(err){console.log(err)}
})

module.exports = router