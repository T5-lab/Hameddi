const mongoose = require('mongoose');

const ExactVehicleDocSchema = mongoose.Schema({
    saleFactor: {
        type: String,
        required: true,
        unique: true
    },
    greenSheet: {
        type: String,
        required: true,
        unique: true
    },
    insurance: {
        type: String,
        required: true,
        unique: true
    },
    tax: {
        type: String,
        required: true,
        unique: true
    },
    property: {
        type: String,
        required: true,
        unique: true
    },
    advocates: {
        type: String,
        required: true,
        unique: true
    },
    idCard: [{
        type: String,
        required: true,
        unique: true
    }]
})

module.exports = mongoose.model('exactVehicleDoc', ExactVehicleDocSchema);