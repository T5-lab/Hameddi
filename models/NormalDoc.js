const mongoose = require('mongoose');

const NormalDocSchema = mongoose.Schema({
    idCard: [{
        type: String,
        required: true
    }],
    docForm: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('normalDoc', NormalDocSchema);