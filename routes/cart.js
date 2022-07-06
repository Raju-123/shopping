const cart = require('../controller/cart');

const { authentication } = require('../controller/auth');
const { cartCreationValidation, cartUpdateValidation } = require('../validations/cart.validation');
const { validate } = require('../validations/validate');

exports.cartRoutes = function (app) {
    app.group('/cart', (router) => {
        router.get('/', authentication, cart.getCart);
        router.get('/:id', authentication, cart.getCartById);
        router.post('/', authentication, cartCreationValidation(), validate, cart.createCart);
        router.put('/:id', authentication, cartUpdateValidation(), validate, cart.updateCart);
        router.delete('/:id', authentication, cart.deleteCart);
    });
}
