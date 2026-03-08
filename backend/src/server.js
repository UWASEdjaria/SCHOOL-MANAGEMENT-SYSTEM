import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import feeRoutes from './routes/feeRoutes.js';
import academicRoutes from './routes/academicRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Client API running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/academic', academicRoutes);

app.listen(PORT, () => {
  console.log(`Client Backend on port ${PORT}`);
});
