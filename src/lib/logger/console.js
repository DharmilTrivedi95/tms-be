const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = (app) => {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      // Log file
      new winston.transports.File({ filename: 'logs/info.log' }),
    ],
    format: winston.format.combine(winston.format.json()),
    meta: false,
    msg: "{{req.method}} -- {{req.originalUrl}} -- {{res.statusCode}} -- {{res.responseTime}} -- {{req.headers.timeStmp}} -- {{req.headers.ip}} -- {{req.user ? req.user._id : ''}} ",
    expressFormat: true,
    colorize: true,
  }));
};
