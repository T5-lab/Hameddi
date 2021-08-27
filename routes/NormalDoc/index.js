const express = require('express');

const NormalDoc = require('../../models/NormalDoc');
const upload = require('../../utils/upload');
const handleFiles = require('./lib/handleFiles');
const cleanup = require('../../utils/cleanup');

const router = express.Router();

module.exports = () => {

    router.post('/add', upload.array('photos', 3), handleFiles, async (req, res, next) => {
        try {
            let doc = new NormalDoc({
                idCard: [
                    req.doc["idCard1"],
                    req.doc["idCard2"]
                ],
                docForm: req.doc.docForm
            });
            res.send(await doc.save());
        } catch (e) {
            cleanup(req.doc);
            return next(e);
        }
    })

    return router;
}