const express = require('express');
const Transaction = require('./models/Transaction');

const router = express.Router();

router.get('/statistics', async (req, res) => {
    const { month } = req.query;
    if (!month) return res.status(400).json({ error: 'Month is required' });

    try {
        const startDate = new Date(`2021-${month}-01`);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);

        const transactions = await Transaction.find({
            dateOfSale: { $gte: startDate, $lt: endDate }
        });

        const totalSales = transactions.reduce((sum, t) => sum + t.price, 0);
        const soldItems = transactions.filter((t) => t.sold).length;
        const unsoldItems = transactions.length - soldItems;

        res.json({ totalSales, soldItems, unsoldItems });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch statistics', details: error.message });
    }
});

module.exports = router;
