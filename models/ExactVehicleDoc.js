const mongoose = require('mongoose');

const ExactVehicleDocSchema = mongoose.Schema({
    saleFactor: {
        type: String,
        required: true
    },
    greenSheet: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    },
    tax: {
        type: String,
        required: true
    },
    property: {
        type: String,
        required: true
    },
    idCard: [{
        type: String,
        required: true
    }],
    advocates: {
        type: String
    },
    advocacy: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('exactVehicleDoc', ExactVehicleDocSchema);