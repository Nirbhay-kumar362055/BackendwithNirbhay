// import mongoose from "mongoose"
// import {DB_NAME} from "../constants.js"


// const connectDB = async() => {
//     // try {
//     //     // const connectionEstablish = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     //     const connectionEstablish = await mongoose.connect(`${process.env.MONGODB_URI}`)
//     //     console.log(` \n Establish connection of mongodb !! DB HOST : ${connectionEstablish.connection.host}`);// ye connection ko humne isliye liya kyu ki production ka or development ka db alag alag hota hai toh atleast mujhe pata toh chle ki mai kis host pr connect ho raha hu 
        
        
//     // } catch (error) {
//     //     console.log("error", error);
//     //     process.exit(1)
//     // }

//     // mongoose.connect("mongodb+srv://nirbhaykumar5530_db_user:y1OBwA9FAx8ZsOrR@nirbhaybackend.cmnc8oy.mongodb.net/?appName=nirbhaybackend")
//     // .then(() => {
//     //     console.log("MongoDb connected successful");
//     // }).catch((error) => {
//     //     console.log("Error connecting database", error);
//     // });
// }

// export default connectDB;

import dotenv from 'dotenv'

dotenv.config()



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://nirbhaykumar5530_db_user:y1OBwA9FAx8ZsOrR@nirbhaybackend.cmnc8oy.mongodb.net/?appName=nirbhaybackend");
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error connecting database", error);
        process.exit(1);
    }
};

connectDB();

export default connectDB;