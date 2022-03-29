const express = require('express');
const router = express.Router();
const healthcheckRoutes = require('./routes/healthcheck');

router.use(healthcheckRoutes);

module.exports = router;