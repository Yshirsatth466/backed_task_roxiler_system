const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const transactionRoutes = require('./routes/transactions');
const initializeRoutes = require('./routes/initialize');
const statisticsRoutes = require('./routes/statistics');
const barChartRoutes = require('./routes/barChart');
const pieChartRoutes = require('./routes/pieChart');
const combinedRoutes = require('./routes/combined');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose
    .connect('mongodb://127.0.0.1:27017/transactionsDB') 
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// API Routes
app.use('/api', initializeRoutes);
app.use('/api/transactions', transactionRoutes); 
app.use('/api', statisticsRoutes);
app.use('/api', barChartRoutes);
app.use('/api', pieChartRoutes);
app.use('/api', combinedRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
