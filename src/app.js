import express from 'express';
// logger not used here; logging handled by morgan or other modules
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '#routes/auth.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// standard body parsers (JSON and urlencoded)

// Use morgan with default stream (stdout)
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.status(200).send('Hello from Acquisitions!');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquisitions API is running!' });
});

// Mount auth routes
app.use('/api/auth', authRoutes);

export default app;
