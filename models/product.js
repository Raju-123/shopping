const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    mfd: {
        type: String,
        required: true
    },
    exp: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    }
});

module.exports = Product = mongoose.model('products', CartSchema);
