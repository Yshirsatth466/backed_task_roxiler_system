const express = require('express');
const Transaction = require('./models/Transaction');

const router = express.Router();

router.get('/', async (req, res) => {
    const { search = '', page = 1, perPage = 10 } = req.query;

    try {
        const query = search
            ? {
                  $or: [
                      { title: new RegExp(search, 'i') },
                      { description: new RegExp(search, 'i') },
                      { price: Number(search) || null }
                  ]
              }
            : {};

        const transactions = await Transaction.find(query)
            .skip((page - 1) * perPage)
            .limit(Number(perPage));

        const totalCount = await Transaction.countDocuments(query);

        res.json({ total: totalCount, page: Number(page), perPage: Number(perPage), transactions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions', details: error.message });
    }
});

module.exports = router;
