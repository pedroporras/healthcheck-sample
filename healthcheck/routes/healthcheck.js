const express = require('express');
const router = express.Router();
const { HealthcheckerDetailedCheck, HealthcheckerSimpleCheck} = require('nodejs-health-checker/dist/healthchecker/healthchecker')
const { Dialects, HealthTypes } = require('nodejs-health-checker/dist/interfaces/types')

router.get('/liveness', (req, res) => {
    res.json(HealthcheckerSimpleCheck());
});
router.get('/readiness', async (req, res) => {
    let result = await HealthcheckerDetailedCheck({
        name: 'ReadinessExample',
        version: '1.0.0',
        integrations: [
            {
                type: HealthTypes.Database,
                name: "Simple Database integration check",
                host: "localhost",
                dbPort: 5432,
                dbName: "postgres",
                dbUser: "postgres",
                dbPwd: "root",
                dbDialect: Dialects.postgres,
            },
            {
                type: HealthTypes.Web,
                name: 'Simple API integration check',
                host: 'https://github.com'
            }
        ],
    });
    res.json(result);
});


module.exports = router;