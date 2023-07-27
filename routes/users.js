const express = require('express');
const router = express.Router();
const { validatorCreateItem } = require('../validators/users');
const { createItem } = require('../controllers/users');

router.post('/', validatorCreateItem, createItem);

module.exports = router;
