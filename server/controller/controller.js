import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProduct = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(199).json({ success: true, data: products});
    } catch (error) {
        console.log("Error in fetching products", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const postProduct = async (req, res) => {
    const product = req.body; //user will send this data

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Provide all fields"});
    } 

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});

    }catch(error){
        console.error("Error in Create product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });

    }
};

export const deleteProduct = async(req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Item delted"});
    } catch (error) {
        res.status(404).json({success: false, messge: "Item not found"});
    }
};

export const putProduct = async (req, res) => {
   const {id} = req.params;
   const product = req.body;

   if (!mongoose.isValidObjectId(id)){
    return res.status(404).json({success: false, message: "Invalid Id"});
   }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updateProduct});

    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});    
}
};