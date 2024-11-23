const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    dateOfSale: { type: Date, required: true },
    category: { type: String, required: true },
    sold: { type: Boolean, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
