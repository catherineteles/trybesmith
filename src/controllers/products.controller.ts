import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/products.interfaces';
import { addNewProduct } from '../services/products.service';

const create = async (req: Request, res: Response) => {
  const product = req.body as Product;
  const result = await addNewProduct(product);
  return res.status(201).json(result);
};
  
const list = async (_req: Request, _res: Response, _next: NextFunction) => { };
  
export {
  create,
  list,
};