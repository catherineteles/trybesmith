import { Request, Response } from 'express';
import listAllOrders from '../services/orders.service';

const list = async (_req: Request, res: Response) => {
  const result = await listAllOrders();
  return res.status(200).json(result);
};

export default list;