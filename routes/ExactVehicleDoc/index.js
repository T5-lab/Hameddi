const express = require('express');

const ExactVehicleDoc = require('../../models/ExactVehicleDoc');
const upload = require('../../utils/upload');
const handleFiles = require('./lib/handleFiles');
const cleanup = require('../../utils/cleanup');

const router = express.Router();

module.exports = () => {

    router.post('/add', upload.array('photos', 8), handleFiles, async (req, res, next) => {
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
            res.send(await doc.save());
        } catch (e) {
            cleanup(req.doc);
            return next(e);
        }
    })

    return router;
}