const express = require('express');
const router = express.Router();


router.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
});
router.get('/', (req, res) => res.json({message: 'Hellos'}));


module.exports = router;