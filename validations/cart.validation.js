const { body } = require('express-validator');

const cartCreationValidation = () => {
    return [
        body('productCost')
            .isInt().withMessage('Product cost must be integer.')
            .not().isEmpty().withMessage('Product cost is required.'),
        body('productCount')
            .isInt().withMessage('Product count must be integer.')
            .not().isEmpty().withMessage('Product count is required.'),
        body('ProductId')
            .isString().withMessage('Product id must be string')
            .not().isEmpty().withMessage('Product id is required'),
    ]
}

const cartUpdateValidation = () => {
    return [
        body('productCost')
            .isInt().withMessage('Product cost must be integer.')
            .not().isEmpty().withMessage('Product cost is required.'),
        body('productCount')
            .isInt().withMessage('Product count must be integer.')
            .not().isEmpty().withMessage('Product count is required.'),
        body('ProductId')
            .isString().withMessage('Product id must be string')
            .not().isEmpty().withMessage('Product id is required'),
    ]
}

module.exports = {
    cartCreationValidation,
    cartUpdateValidation,
}
