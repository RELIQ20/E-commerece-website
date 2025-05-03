import mongoose from "mongoose";
//function to connect to the Database which is MongoDB

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //1: process failure , 0 success
    }
}