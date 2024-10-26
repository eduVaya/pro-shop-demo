// modules
import express from 'express';
import dotenv from 'dotenv';
// Project files
import connectDB from './config/db.js';
import products from './data/products.js';

// Start App
dotenv.config(); // Start global env constats
const port = process.env.PORT; // Set port
connectDB(); //Connect to MongoDB
const app = express(); // Start express app

// Routes
app.get('/', (req, res) => {
    res.send('API is running....');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server running on ${port}`));