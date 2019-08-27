process.env.TZ = 'GMT';
require('dotenv').config({ silent: true });
const express = require('express');
const server = require('./server');
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// server bootstrap
server(app, __dirname);

module.exports = app;
