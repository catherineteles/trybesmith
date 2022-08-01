import { Router } from 'express';
import list from '../controllers/orders.controller';

const router = Router();

router.get('/', list);

export default router;