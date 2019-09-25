import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import articleRouter from './routes/articleRoutes';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(articleRouter);

export default app;
