import { Router } from 'express';
import { create } from '../controllers/products.controller';

const router = Router();

router.post('/products', create);

export default router;