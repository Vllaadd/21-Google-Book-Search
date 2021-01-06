const router = require('express').Router();

const { findAll } = require('../controllers/book.js');

router.get('/', findAll);

module.exports = router;