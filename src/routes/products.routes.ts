import { Router } from 'express';
import { create, list } from '../controllers/products.controller';

const router = Router();

router.post('/products', create);
router.get('/products', list);

export default router;