const router = require('express').Router();
const products = require('./productRouter');
const test = require('./testRouter')

router.use('/products', products);
router.use('/test', test);

module.exports = router;