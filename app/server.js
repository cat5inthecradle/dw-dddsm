'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = server;
