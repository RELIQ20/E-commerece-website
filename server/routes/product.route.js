import express from "express";
import { deleteProduct, getProduct, postProduct, putProduct } from "../controller/controller.js";

const router = express.Router();

export default router;

//show or display all products 
router.get("/", getProduct);
//show and create products
router.post("/", postProduct);
//delete products through their id's
router.delete("/:id",deleteProduct );
//update anything from the products through id's
router.put("/:id", putProduct);