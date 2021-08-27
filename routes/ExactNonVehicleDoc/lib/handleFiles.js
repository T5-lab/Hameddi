const fs = require('fs')
const path = require('path');

function findCategory(i) {
    switch(i) {
        case 0: return 'oneSheetDoc';
        case 1: return 'payankar';
        case 2: return 'mobainame';
        case 3: return 'propertyReport';
        case 4: return 'majlesTafkiki';
        case 5: return 'oqaf';
        case 6: return 'advocates';
        case 7: return 'idCard1';
        case 8: return 'idCard2';
    }
}

module.exports = (req, res, next) => {
    const BASE_DIR = path.resolve(`${__dirname}/../../../public`);
    req.doc = {};
    req.files.forEach((file, i) => {
        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
            return next("invalid format");
        }
        let name = `${Date.now()}${i}.jpg`;
        fs.writeFileSync(`${BASE_DIR}/${name}`, file.buffer);
        req.doc[`${findCategory(i)}`] = name;
    })
    return next();
}