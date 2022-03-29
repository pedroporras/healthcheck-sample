
const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const healthcheckRoutes = require("../healthcheck");

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use('/healthcheck', healthcheckRoutes);

server.get('/', (req, res) => {
    res.json({ status: "I'm alive!" });
})
//server.use('/api', apiRoute);


module.exports = {
    server,
    PORT
};