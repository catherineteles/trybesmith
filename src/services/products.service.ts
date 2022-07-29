import Product from '../interfaces/products.interfaces';
import { addProduct } from '../models/products.models';

const addNewProduct = async (product: Product) => addProduct(product);

const listAllProducts = async () => {
};

export {
  addNewProduct,
  listAllProducts,
};