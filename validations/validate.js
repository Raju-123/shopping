const { validationResult } = require('express-validator')

module.exports = {
    validate: (req, res, next) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        const result = {};
        errors.array().forEach(element => {
            result[element.param] = element.msg;
        });
        return res.status(422).json({ status: false, message: 'Bad request.Validation errors found.', error: result })
    }
}

