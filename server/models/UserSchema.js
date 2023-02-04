const mongoose  = require("mongoose")


const userSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    subscribers:
    {
        type: Number,
        required: false,
        default: 0
    },
    subscriptions:
    {
        type: [String],
        required: false,
        default: null
    },
})


module.exports =  mongoose.model('User', userSchema);