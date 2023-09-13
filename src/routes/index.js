const { sendResponse } = require('../lib/response-handler');
const taskRoutes = require('./task');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Health Check OK');
  });

  app.use((req, res, next) => {
    req.sendResponse = sendResponse.bind(null, req, res, next);
    next();
  });

  // All tasks routes registerd here
  app.use('/task', taskRoutes);

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).send({ error: `Not Found. Accessing route - ${req.path} For ${req.method}` });
  });
};
