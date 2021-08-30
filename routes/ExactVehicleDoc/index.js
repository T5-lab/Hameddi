const express = require('express');

const ExactVehicleDoc = require('../../models/ExactVehicleDoc');
const upload = require('../../utils/upload');
const handleFiles = require('./lib/handleFiles');
const cleanup = require('../../utils/cleanup');

const router = express.Router();

module.exports = () => {

    router.post('/add', upload.array('photos', 8), handleFiles, async (req, res, next) => {
        try {
            if(req.body.advocacy === "false") {
                delete req.doc.advocates;
            }
            let doc = new ExactVehicleDoc({
                ...req.doc,
                idCard: [
                    req.doc["idCard1"],
                    req.doc["idCard2"]
                ],
                advocacy: req.body.advocacy
            });
            res.send(await doc.save());
        } catch (e) {
            cleanup(req.doc);
            return next(e);
        }
    })

    return router;
}