const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const cfenv = require("cfenv");
const serverInit = require('./server.init');

module.exports = (app, dirname) => {
    // setup middleware pipe
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    // serve client static files
    app.use('/', express.static(path.join(dirname, 'client', 'dist', 'bundle')));

    // server init
    serverInit(app, dirname);
    return app;
};
