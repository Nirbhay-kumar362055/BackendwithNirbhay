//require('dotenv').config({path: './env'}) // ek ye tarika hai import karne ka but ye inconsistence hai
import connectDB from "./db/index.js";

import dotenv from 'dotenv'

dotenv.config();


await connectDB();









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
