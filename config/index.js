const bunyan = require('bunyan');
const path = require('path');
// Load package.json
const pjs = require('../package.json');

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) => bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    DB_ADDRESS: 'mongodb+srv://admin:UYJja7m47csrHGPE@cluster0.q3l6k.mongodb.net/Hameddi?retryWrites=true&w=majority',
    log: () => getLogger(name, version, 'debug'),
  },
  production: {
    name,
    version,
    serviceTimeout: 30,
    DB_ADDRESS: 'mongodb+srv://admin:UYJja7m47csrHGPE@cluster0.q3l6k.mongodb.net/Hameddi?retryWrites=true&w=majority',
    log: () => getLogger(name, version, 'info'),
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
    DB_ADDRESS: 'mongodb+srv://admin:UYJja7m47csrHGPE@cluster0.q3l6k.mongodb.net/Hameddi?retryWrites=true&w=majority',
    log: () => getLogger(name, version, 'fatal'),
  },
};
