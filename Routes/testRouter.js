const {
    getStatus
} = require ('../Controllers/testController')

const router = require('express').Router();

router.get('/', (req, res) => {
    getStatus()
        .then((data) => res.json(data))
        .catch(error => res.status(500).json({message: error}));
});

module.exports = router;