import express, { Router, Request, Response, NextFunction } from 'express';
import productController from "../controllers/productController";

const productsRouter: Router = express.Router();
const {
    createProduct,
    fetchProducts,
    fetchProductByID,
    updateProduct,
    deleteProduct
} = productController;

// Router middleware
productsRouter.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Time: ${Date.now()}`);
    next();
});

// Routes
productsRouter.post('/', createProduct);
productsRouter.get('/', fetchProducts);
productsRouter.get('/:id', fetchProductByID);
productsRouter.patch('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;