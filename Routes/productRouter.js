const {
    getProducts,
    getById,
    getByName,
    postProduct
} = require ('../Controllers/productController')

const router = require('express').Router();

router.get('/', async (req, res) => {
    let products = await getProducts();
    res.status(200).json(products);
});

router.get('/byId/:id', async (req, res) => {
    let product = await getById(req.params.id);

    if(!product)
        return res.status(404).json(product);
 
    res.status(200).json(product);
})

router.get('/byName/:name', async (req, res) => {
    console.log(req.params.name)
    let product = await getByName(req.params.name);

    if(!product)
        return res.status(404).json(product);
 
    res.status(200).json(product);
})

router.post('/', async (req, res) => {
    await postProduct(req.body);
    res.status(200).json();
})

module.exports = router;