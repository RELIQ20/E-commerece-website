import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/database.js';
import productRoute from './routes/product.route.js'

dotenv.config();

const app = express();

app.use(express.json()); // allows to accept JSON data in the req.body

app.use("/api/products", productRoute);
//listen and works to port 5000 and prompts 'server is running'
app.listen(5000, () => {
    connectDB();
    console.log("Server is running...");
});

