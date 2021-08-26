const express = require('express');

const ExactVehicleDocRoutes = require('./ExactVehicleDoc');

const router = express.Router();

module.exports = () => {

    router.use('/exact-vehicle', ExactVehicleDocRoutes());

    return router;
}