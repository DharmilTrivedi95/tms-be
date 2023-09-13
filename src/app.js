require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./lib/database/mongoose');

const app = express();

// connect with mongoDB via mongoose ORM
mongoose.connect();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

// manage console logs: to print the logs and error on console
require('./lib/logger/console')(app);
require('./routes')(app);

// log every errors into the logs/error.log file via winston error logger
require('./lib/logger/error')(app);

const port = process.env.PORT || 8083;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
