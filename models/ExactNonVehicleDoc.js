const mongoose = require('mongoose');

const ExactNonVehicleDocSchema = mongoose.Schema({
    oneSheetDoc: {
        type: String,
        required: true
    },
    payankar: {
        type: String,
        required: true
    },
    mobainame: {
        type: String,
        required: true
    },
    propertyReport: {
        type: String,
        required: true
    },
    majlesTafkiki: {
        type: String,
        required: true
    },
    oqaf: {
        type: String,
        required: true
    },
    advocates: {
        type: String,
        required: true
    },
    idCard: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('exactNonVehicleDoc', ExactNonVehicleDocSchema);