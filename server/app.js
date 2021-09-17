const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const router = require("../routes/index");

module.exports = (config) => {
  const log = config.log();

  // Add a request logging middleware in development mode
  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use(cors({origin: config.FRONT_ADDRESS}));
  app.use(helmet());

  app.use(express.urlencoded({extended: true}))
  app.use(express.json())

  app.use('/', router());

  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
};
