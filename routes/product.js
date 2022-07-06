const product = require('../controller/product');

const { authentication } = require('../controller/auth');
const { productCreationValidation, productUpdateValidation } = require('../validations/product.validation');
const { validate } = require('../validations/validate');

exports.productRoutes = function (app) {
    app.group('/product', (router) => {
        router.get('/', authentication, product.getProduct);
        router.get('/:id', authentication, product.getProductById);
        router.post('/', productCreationValidation(), validate, authentication, product.createProduct);
        router.put('/:id', productUpdateValidation(), validate, authentication, product.updateProduct);
        router.delete('/:id', authentication, product.deleteProduct);
    });
}
