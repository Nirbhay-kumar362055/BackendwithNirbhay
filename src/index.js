//require('dotenv').config({path: './env'}) // ek ye tarika hai import karne ka but ye inconsistence hai
import connectDB from "./db/index.js";
import app from "./app.js"

import dotenv from 'dotenv'

dotenv.config();


await connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error is", error)
        throw error;
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongodb connection failed ", error)
})








/*
import express from "express"

const app = express();


( async () => { // ifis bolte hai isko isme hum do call backsirf lete hai
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)// yaha pr mongodb connection ho rha hai
        app.on("error", (error)=>{
            console.log("Error", error);
            throw error;

        })

        app.listen('process.env.PORT' , ()=>{
            console.log(`app is listening ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
})()
*/
