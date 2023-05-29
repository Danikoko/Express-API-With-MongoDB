import express, { Router } from 'express';
import productsRouter from '../src/routes/products';

const router: Router = express.Router();

router.use('/products', productsRouter);

export default router;