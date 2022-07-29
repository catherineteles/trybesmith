import Product from '../interfaces/products.interfaces';
import { addProduct, listProducts } from '../models/products.models';

const addNewProduct = async (product: Product) => addProduct(product);

const listAllProducts = async () => listProducts();

export {
  addNewProduct,
  listAllProducts,
};