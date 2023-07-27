const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('type').exists().notEmpty().isString(),

    check('user').exists().notEmpty().isString(),

    check('password').exists().notEmpty().isString(),

    (req, res, next) => validateResults(req, res, next),
];
module.exports = {
    validatorCreateItem,
};
