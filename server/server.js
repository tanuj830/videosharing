const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

dotenv.config()
app.use(express.json())

PORT = process.env.PORT_NO || 8000

// connecting to db
 try{
    mongoose.connect(process.env.MONGO_URI)
 }catch(err){

     console.log(err)
 }


    // relaxing security
    app.use(cors({
        origin: 'https://www.section.io',
        origin: ['https://www.section.io', 'https://www.google.com/'],
        origin: '*',
        allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
        methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
    }))
    
    // parsing to json
    
    // importing routes
    const auth = require("./routes/Auth")
    app.use("/signin", auth)
    
    
    const video = require("./routes/Video")
    app.use("/channel", video)
    
    const watch = require("./routes/watch")
    app.use("/watch", watch)
    
    
    const comment = require("./routes/Comment")
    app.use("/comment", comment)
    
    const user = require("./routes/User")
    app.use("/", user)
    // listening app at port no 8000
app.listen(PORT, ()=>{
      console.log("Server connected!")
})