#!/usr/bin/env node

const http = require('http');
const mongoose = require('mongoose');

const config = require('../config')[process.env.NODE_ENV || 'development'];

const log = config.log();

mongoose.connect(config.dbAddress, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  log.info("Successfully Connected to MongoDB");
}).catch(e => {
  log.error("Error While Connecting to MongoDB");
});

const app = require('../server/app')(config);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

server.on('listening', () => {
  log.info(
    `Hi there! I'm listening on port ${server.address().port} in ${app.get('env')} mode.`,
  );
});
