import express from 'express';
import { connectDB } from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

