const express = require('express');

const ExactNonVehicleDoc = require('../../models/ExactNonVehicleDoc');
const upload = require('../../utils/upload');
const cleanup = require('../../utils/cleanup');
const handleFiles = require('./lib/handleFiles');

const router = express.Router();

module.exports = () => {

    router.post('/add', upload.array('photos', 9), handleFiles, async (req, res, next) => {
        try {
            let doc = new ExactNonVehicleDoc({
                oneSheetDoc: req.doc.oneSheetDoc,
                payankar: req.doc.payankar,
                mobainame: req.doc.mobainame,
                propertyReport: req.doc.propertyReport,
                majlesTafkiki: req.doc.majlesTafkiki,
                oqaf: req.doc.oqaf,
                advocates: req.doc.advocates,
                idCard: [
                    req.doc['idCard1'],
                    req.doc['idCard2']
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