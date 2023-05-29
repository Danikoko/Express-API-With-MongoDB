import { Request, Response } from 'express';
import Product from "../models/Product";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (ERROR) {
        res.status(500).json({
            message: ERROR instanceof Error ? ERROR.message : 'Error encountered'
        });
    }
}

// Fetch all products
const fetchProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR instanceof Error ? ERROR.message : 'Error encountered'
        });
    }
}

// Fetch a product by ID
const fetchProductByID = async (req: Request, res: Response) => {
    try {
        const { id }  = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR instanceof Error ? ERROR.message : 'Error encountered'
        });
    }
}

// Update a product
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id }  = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({
                message: `Cannot find any product with ID ${id}`
            });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR instanceof Error ? ERROR.message : 'Error encountered'
        });
    }
}

// Delete a product by ID
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id }  = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                message: `Cannot find any product with ID ${id}`
            });
        }
        res.status(200).json(product);
    } catch (ERROR) {
        res.status(500).json({
            message: ERROR instanceof Error ? ERROR.message : 'Error encountered'
        });
    }
}

export default {
    createProduct,
    fetchProducts,
    fetchProductByID,
    updateProduct,
    deleteProduct
}