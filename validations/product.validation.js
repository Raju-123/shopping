const { body } = require('express-validator');

const productCreationValidation = () => {
    return [
        body('productName')
            .isString().withMessage('Product name must be string')
            .not().isEmpty().withMessage('Product name is required'),
        body('productCount')
            .isInt().withMessage('Product count must be integer')
            .not().isEmpty().withMessage('Product count is required'),
        body('mfd')
            .isString().withMessage('mfd must be string')
            .not().isEmpty().withMessage('mfd is required'),
        body('price')
            .isInt().withMessage('Price must be integer')
            .not().isEmpty().withMessage('Price is required'),
        body('exp')
            .isString().withMessage('exp must be string')
            .not().isEmpty().withMessage('exp is required'),
    ]
}

const productUpdateValidation = () => {
    return [
        body('productName')
            .isString().withMessage('Product name must be string')
            .not().isEmpty().withMessage('Product name is required'),
        body('productCount')
            .isInt().withMessage('Product count must be integer')
            .not().isEmpty().withMessage('Product count is required'),
        body('mfd')
            .isString().withMessage('mfd must be string')
            .not().isEmpty().withMessage('mfd is required'),
        body('price')
            .isInt().withMessage('Price must be integer')
            .not().isEmpty().withMessage('Price is required'),
        body('exp')
            .isString().withMessage('exp must be string')
            .not().isEmpty().withMessage('exp is required'),
    ]
}

module.exports = {
    productCreationValidation,
    productUpdateValidation,
}
