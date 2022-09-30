const {
    getStatus
} = require ('../Controllers/testController')

const router = require('express').Router();

router.get('/', (req, res) => {
    let response = getStatus();
    res.status(200).json(response);
});

module.exports = router;