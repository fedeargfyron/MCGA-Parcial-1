const {
    getProducts,
    getById,
    getByName,
    postProduct,
    updateProduct,
    deleteProduct
} = require ('../Controllers/productController')

const router = require('express').Router();

router.get('/', async (req, res) => {
    await getProducts()
        .then((data) => res.json(data))
        .catch(error => res.status(500).json({message: error}));
});

router.get('/byId/:id', async (req, res) => {
    await getById(req.params.id)
        .then((data) => {
            if(!data) return res.status(404).json(data);
            return res.json({data})
        })
        .catch(error => res.status(500).json({message: error}));
})

router.get('/byName/:name', async (req, res) => {
    await getByName(req.params.name)
        .then((data) => {
            if(!data) return res.status(404).json(data);
            return res.json({data})
        })
        .catch(error => res.status(500).json({message: error}));
})

router.post('/', async (req, res) => {
    await postProduct(req.body)
        .then(() => res.json())
        .catch(error => res.status(500).json({message: error}));
})

router.put('/:id', async (req, res) => {
    await updateProduct(req.params.id, req.body)
        .then(() => res.json())
        .catch(error => res.status(500).json({message: error}));
})

router.delete('/:id', async (req, res) => {
    await deleteProduct(req.params.id)
        .then(() => res.json())
        .catch(error => res.status(500).json({message: error}));
})

module.exports = router;