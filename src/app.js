import express from 'express';
import userRoutes from './routes/userRoutes';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);

export default app;
