const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    product_count: {
        type: Number,
        required: true
    },
    product_cost: {
        type: Number,
        required: true
    },
    total_product_cost: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
    },
    total_amount: {
        type: Number,
        required: true
    }
});

module.exports = Cart = mongoose.model('carts', CartSchema);
