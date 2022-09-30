const {
    getProducts
} = require ('../Controllers/productController')

const router = require('express').Router();

router.get('/', async (req, res) => {
    let products = await getProducts();
    res.status(200).json(products);
});

module.exports = router;