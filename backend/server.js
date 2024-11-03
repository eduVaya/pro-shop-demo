// modules
import express from 'express';
import dotenv from 'dotenv';
// Project files
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Start App
dotenv.config(); // Start global env constats
const port = process.env.PORT; // Set port
connectDB(); //Connect to MongoDB
const app = express(); // Start express app

// Routes
app.get('/', (req, res) => {
    res.send('API is running....');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));