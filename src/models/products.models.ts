import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/products.interfaces';
import connection from './connection';

const addProduct = async (product: Product) => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    `INSERT INTO
    Trybesmith.Products(name, amount)
  VALUES
    (?, ?);`,
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const listProducts = async () => {
};

export {
  addProduct,
  listProducts,
};