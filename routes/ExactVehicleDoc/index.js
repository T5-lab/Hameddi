const express = require('express');

const ExactVehicleDoc = require('../../models/ExactVehicleDoc');
const upload = require('../../utils/upload');
const handleFile = require('./lib/handleFiles');
const cleanup = require('./lib/cleanup');

const router = express.Router();

module.exports = () => {

    router.post('/add', upload.array('photos', 8), handleFile, async (req, res, next) => {
        try {
            let doc = new ExactVehicleDoc({
                saleFactor: req.doc.saleFactor,
                greenSheet: req.doc.greenSheet,
                insurance: req.doc.insurance,
                tax: req.doc.tax,
                property: req.doc.property,
                advocates: req.doc.advocates,
                idCard: [
                    req.doc["idCard1"],
                    req.doc["idCard2"]
                ]
            });
            doc = await doc.save();
            res.send(doc);
        } catch (e) {
            cleanup(req.doc);
            return next(e);
        }
    })

    return router;
}