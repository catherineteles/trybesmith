import connection from './connection';

const listOrders = async () => {
  const query = `SELECT Orders.id,
  Orders.userId,
  JSON_ARRAYAGG(Products.id) AS productsId
  FROM Trybesmith.Orders
  INNER JOIN Trybesmith.Products ON Orders.id = Products.orderId
  GROUP BY Orders.id;
  `;
  const [Orders] = await connection.execute(query);
  return Orders;
};

export default listOrders;