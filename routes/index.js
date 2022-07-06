const cart = require('./cart');
const product = require('./product');
const auth = require('./auth');

exports.index = function(app) {
    cart.cartRoutes(app);
    product.productRoutes(app);
    auth.authRoutes(app);
}