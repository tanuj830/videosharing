const express = require("express")
const { findOne } = require("../models/UserSchema")
const router = express.Router()
const UserModel = require("../models/UserSchema")

// Getting users info
router.get("/", async(req,res)=>{

    const users = await UserModel.find({})
    res.status(200).send(users)
})

// subscribe channel
router.put("/watch/:id", async(req,res)=>{

    await UserModel.findByIdAndUpdate(req.params.id,{$inc: {subscribers:Number}}).then(res.status(200).json("user updated")).catch(err=>console.log(err))
})

router.put("/watch/:id", async(req,res)=>{

    await UserModel.findByIdAndUpdate(req.params.id,{subscriptions:subscriptions.push() }).then(res.status(200).json("user updated")).catch(err=>console.log(err))
})



// updatation on setting page(updating user)
router.put("/account/:id", async(req,res)=>{

    await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(res.send("user updated")).catch(err=>console.log(err))

 })

module.exports = router