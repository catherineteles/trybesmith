import { Router } from 'express';
import { create, list } from '../controllers/products.controller';

const router = Router();

router.post('/', create);
router.get('/', list);

export default router;