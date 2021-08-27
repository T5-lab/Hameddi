const express = require('express');

const path = require('path');

const router = express.Router();

module.exports = () => {

    router.get('/:name', async (req, res, next) => {
        try {
            res.sendFile(path.resolve(`${__dirname}/../../public/${req.params.name}`));
        } catch(e) {
            return next(e);
        }
    })

    return router;
}