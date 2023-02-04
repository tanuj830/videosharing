const express = require("express")
const router  =  express.Router()
const Comments = require("../models/CommentSchema")
// const UserSchema = require("../models/UserSchema")
// import {verifyToken}  from "../verifyToken"


router.get("/:id", async(req,res)=>{

    try{
        
     await Comments.find({videoId:req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err))

    //  res.send(comments)
    //  next()
     
    }catch(err){console.log(err)}
})

router.post("/:id", async(req,res)=>{

    try{
        
     await Comments.findByIdAndUpdate(req.params.id, {name:req.body.name}).then(res.send("updated")).catch(err=>console.log(err))

    //  res.send(comments)
    //  next()
     
    }catch(err){console.log(err)}
})


// Writing comments
router.post("/",  async(req,res)=>{

    try{

            const comment = new Comments( {userID: req.body.userID,videoId: req.body.videoId, desc: req.body.desc})
           await comment.save().then(res.send(res.data)).catch(err=>console.log(err))
    
    }catch(err){console.log(err)}
})


module.exports = router