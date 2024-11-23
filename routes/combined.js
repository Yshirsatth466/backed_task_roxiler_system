const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/combined', async (req, res) => {
    const { month } = req.query;
    if (!month) return res.status(400).json({ error: 'Month is required' });

    try {
        const [statistics, barChart, pieChart] = await Promise.all([
            axios.get(`http://localhost:3000/api/statistics?month=${month}`),
            axios.get(`http://localhost:3000/api/barChart?month=${month}`),
            axios.get(`http://localhost:3000/api/pieChart?month=${month}`)
        ]);

        res.json({
            statistics: statistics.data,
            barChart: barChart.data,
            pieChart: pieChart.data
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch combined data', details: error.message });
    }
});

module.exports = router;
