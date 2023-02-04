const mongoose  = require("mongoose")


const videoSchema = new mongoose.Schema({

    title:
    {
        type: String,
        required: true
    },
    disp:
    {
        type: String,
        required: true
    },
    userID:// whome user this schema belongs to
    {
        type: String,
        required: true,
        default: ""
    },
    videoURL:
    {
        type: String,
        required: true
    },
    imageURL:
    {
        type: String,
        required: true
    },
    likes:
    {
        type: Number,
        required: false,
        default: 0
    },
    dislikes:
    {
        type: Number,
        required: false,
        default: 0
    },
    views:
    {
        type: Number,
        required: false,
        default: 0
    },
    tags:
    {
        type: [String],
        required: false,
    },
    Date: {
        type:Date,
        default: Date.now() 
    }
  
})


module.exports =  mongoose.model('Video', videoSchema);