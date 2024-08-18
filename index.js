//using cookie parser for storing the token
const cookieParser=require('cookie-parser')
const express = require ('express')

require('dotenv').config()


const app=express()

//middleware happens in between (if somebody sends a req, do we want to allow it or not)
//these are regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//cookie middleware
app.use(cookieParser())

const userRouter=require('./routes/userRoutes')

//we are basically prefixing /api before all the other routes that will come later
// we are allowing user to go to signup first in the userRoutes.js but now /api will be there before that


app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.send("HI this is coming from the index.js file that is the entry point")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})