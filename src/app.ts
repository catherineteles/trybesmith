import express from 'express';
import productsRoute from './routes/products.routes';
import userRoute from './routes/users.routes';
import orderRoute from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
