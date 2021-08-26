const path = require('path');
const fs = require('fs');

module.exports = doc => {
    const BASE_DIR = path.resolve(`${__dirname}/../public`);
    Object.values(doc).forEach(name => {
        fs.unlinkSync(`${BASE_DIR}/${name}`);
    })
}