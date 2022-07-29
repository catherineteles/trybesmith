import { Request, Response } from 'express';
import Product from '../interfaces/products.interfaces';
import { addNewProduct, listAllProducts } from '../services/products.service';

const create = async (req: Request, res: Response) => {
  const product = req.body as Product;
  const result = await addNewProduct(product);
  return res.status(201).json(result);
};
  
const list = async (_req: Request, res: Response) => { 
  const products = await listAllProducts();
  return res.status(200).json(products);
};
  
export {
  create,
  list,
};