const mongoose  = require("mongoose")


const commentSchema = new mongoose.Schema({

    
    name: {
        type:String,
        required:false,
        default:"tanuj"
    },
    userID://user who commented
    {
        type: String,
        required: true
    },
    videoId:{//video on which user is commenting
        type:String,
        required:true
    },
    desc:
    {
        type: String,
        required: true
    },
    Date: {
        type:Date,
        default: Date.now() 
    }
  
   
})


module.exports =  mongoose.model('Comment', commentSchema);