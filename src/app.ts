import express from 'express';
import healthRouter from './routes/health';
import userRouter from './routes/user'

const app = express();
app.use(express.json());

app.use('/health', healthRouter);
app.use('/users', userRouter);

export default app;
