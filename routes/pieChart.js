const express = require('express');
const Transaction = require('./models/Transaction');

const router = express.Router();

router.get('/pieChart', async (req, res) => {
    const { month } = req.query;
    if (!month) return res.status(400).json({ error: 'Month is required' });

    try {
        const startDate = new Date(`2021-${month}-01`);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);

        const transactions = await Transaction.find({
            dateOfSale: { $gte: startDate, $lt: endDate }
        });

        const categoryCounts = transactions.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + 1;
            return acc;
        }, {});

        res.json(categoryCounts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pie chart data', details: error.message });
    }
});

module.exports = router;
