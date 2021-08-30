const fs = require('fs')
const path = require('path');

function findCategory(i) {
    switch(i) {
        case 0: return "saleFactor";
        case 1: return "greenSheet";
        case 2: return "insurance";
        case 3: return "tax";
        case 4: return "property";
        case 5: return "idCard1";
        case 6: return "idCard2";
        case 7: return "advocates";
    }
}

module.exports = (req, res, next) => {
    const BASE_DIR = path.resolve(`${__dirname}/../../../public`);
    req.doc = {};
    if(req.files.length === 7 && req.body.advocacy === "true") return next("advocates is required");
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