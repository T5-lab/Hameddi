const fs = require('fs');
const path = require('path');

function findCategory(i) {
    switch(i) {
        case 0: return "idCard1";
        case 1: return "idCard2";
        case 2: return "docForm";
    }
}

module.exports = (req, res, next) => {
    const BASE_DIR = path.resolve(`${__dirname}/../../../public`);
    req.doc = {};
    req.files.forEach((file, i) => {
        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
            return next("Invalid Format!");
        }
        let name = `${Date.now()}${i}.jpg`;
        fs.writeFileSync(`${BASE_DIR}/${name}`, file.buffer);
        req.doc[`${findCategory(i)}`] = name;
    })
    return next();
}