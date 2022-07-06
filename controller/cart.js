const ObjectId = require('mongoose').Types.ObjectId;

const Cart = require('../models/cart');

const getCart = (req, res) => {
    Cart.aggregate(
        [
            {
                $project: {
                    product_count: 1,
                    product_cost: 1,
                    total_product_cost: 1,
                    discount: { $ifNull: ['$discount', ''] },
                    total_amount: 1,
                }
            }
        ], (error, cart) => {
            if (cart.length > 0) {
                res.json({ status: true, message: 'Successfully fetched.', data: cart });
            } else {
                res.json({ status: true, message: 'No cart found.' });
            }
        }
    );
}

const getCartById = (req, res) => {
    const cartId = req.params.id;

    Cart.aggregate(
        [
            {
                $match: {
                    _id: ObjectId(cartId)
                }
            },
            {
                $project: {
                    product_count: 1,
                    product_cost: 1,
                    total_product_cost: 1,
                    discount: { $ifNull: ['$discount', ''] },
                    total_amount: 1,
                }
            }
        ], (error, cart) => {
            if (cart.length > 0) {
                res.json({ status: true, message: 'Successfully fetched.', data: cart });
            } else {
                res.json({ status: true, message: 'Cart id not exist.' });
            }
        }
    );
}

const createCart = (req, res) => {
    const data = req.body;
    const totalAmount = data.productCost * data.productCount;
    const discountAmount = totalAmount - (totalAmount * discount / 100);
    const newCart = new Cart({
        product_cost: data.productCost,
        product_count: data.productCount,
        product_id: data.ProductId,
        discount: data.discount || '',
        total_amount: totalAmount,
        total_product_cost: data.discount ? totalAmount - (totalAmount * discount / 100) : totalAmount
    });
    newCart.save();
    res.json({ status: true, message: 'Cart created.' });
}

const updateCart = (req, res) => {
    const body = req.body;
    const cartId = req.params.id;
    Cart.findByIdAndUpdate({ "_id": cartId }, body).then((data) => {
        res.json({ status: true, message: 'Cart updated.', data: data })
    }).catch((error) => {
        res.json({ status: false, message: 'Error.', error: error })
    });
}

const deleteCart = (req, res) => {
    const cartId = req.params.id;

    Cart.deleteOne({ _id: cartId }).then(() => {
        res.json({ status: true, message: 'Product deleted.' });
    }).catch((error) => {
        res.json({ status: false, message: 'Error.', error: error });
    });
}

module.exports = {
    getCart,
    getCartById,
    createCart,
    updateCart,
    deleteCart
}