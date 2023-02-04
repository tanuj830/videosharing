const express = require("express")
const router = express.Router()
const VideoModel = require("../models/VideoSchema")
const UserModel = require("../models/UserSchema")

// Creating video
router.post("/create", async (req,res)=>{

    const video =  new VideoModel({
        title: req.body.title,
        disp:req.body.disp,
        userID: req.body.userID,
        videoURL: req.body.videoURL,
        imageURL: req.body.imageURL,
        tags: req.body.tags
    
    })
    await video.save().then(res.send(video)).catch(err=>console.log(err))
})

// Getting video
router.get("/videos/all", async (req,res)=>{

    await VideoModel.find({}).then(data=>res.send(data)).catch(err=>console.log(err))
    
})

// Getting video by id
router.get("/videos/:id", async (req,res)=>{

   try{
    const Videos = await VideoModel.findOne({_id: req.params.id})
    res.send(Videos)
   }catch(err){console.log(err)}
})

// Getting video by id
router.get("/videos", async (req,res)=>{

    const tg = req.query.tag
    await VideoModel.find({tags: {$in : tg}}).then(data=>res.send(data)).catch(err=>console.log(err))
    
})
router.post("/videos/subscribe", async (req,res)=>{

    const id = req.body.id
    await UserModel.findByIdAndUpdate(id, {subscriptions: id}).then(data=>res.send(" id pushed")).catch(err=>console.log(err))
    
})

// Updating views
router.put("/videos/view", async (req,res)=>{

    const id = req.body.id
    try{
    await VideoModel.findByIdAndUpdate(id, {$inc: {views: 1}}, { new: true })
     res.send("view updated")
    }catch(err){console.log(err)}
 })

module.exports = router