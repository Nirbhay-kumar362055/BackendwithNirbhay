import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/localDb");
        console.log("mongodB connected");// ye connection ko humne isliye liya kyu ki production ka or development ka db alag alag hota hai toh atleast mujhe pata toh chle ki mai kis host pr connect ho raha hu

    } catch (error) {
        console.log("error", error);
        process.exit(1)
    }
};
export default connectDB;