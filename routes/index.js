const express = require('express');

const ExactVehicleDocRoutes = require('./ExactVehicleDoc');
const NormalDocRoutes = require('./NormalDoc');

const router = express.Router();

module.exports = () => {

    router.use('/exact-vehicle', ExactVehicleDocRoutes());
    router.use('/normal', NormalDocRoutes());

    return router;
}