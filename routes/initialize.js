const express = require('express');
const axios = require('axios');
const newLocal = '../models/Transaction';
const Transaction = require(newLocal);

const router = express.Router();

router.post('/initialize', async (req, res) => {
    try {
        const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        
       
        await Transaction.deleteMany();

        
        await Transaction.insertMany(data);

        res.status(201).json({ message: 'Database initialized with seed data' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initialize the database', details: error.message });
    }
});

module.exports = router;
