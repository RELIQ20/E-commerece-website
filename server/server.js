import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/database.js';
import productRoute from './routes/product.route.js'

dotenv.config();

const app = express();

app.use(express.json()); // allows to accept JSON data in the req.body

const PORT = process.env.PORT || 5000 //default is 5000 

app.use("/api/products", productRoute);//mahimong prefix

//listen and works to port 5000 and prompts 'server is running'
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running..." + PORT);
});

