const express = require('express');

const ExactVehicleDocRoutes = require('./ExactVehicleDoc');
const NormalDocRoutes = require('./NormalDoc');
const ExactNonVehicleDocRoutes = require('./ExactNonVehicleDoc');

const router = express.Router();

module.exports = () => {

    router.use('/exact-vehicle', ExactVehicleDocRoutes());
    router.use('/normal', NormalDocRoutes());
    router.use('/exact-non-vehicle', ExactNonVehicleDocRoutes());

    return router;
}