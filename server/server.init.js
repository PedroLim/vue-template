/* eslint-disable global-require, import/no-extraneous-dependencies */

/**
 * Initialize server
 * @param {Object} app express app instance
 * @param {Number} port port number
 */
// function initProd (app, port) {
//     app.listen(port, () => logger.info(`Server running on production mode at ${port}`));
// }

/**
 * Bootstrap https server for development with hot reload.
 * Hot reload will only work on development ENV, since it depends on dependencies set as devDependencies
 * @param {Object} app express app instance
 * @param {Number} port port number
 * @param {Object} config configuration object
 */
// function initDev (app, port, config) {}

/**
 * Facade to init server
 * @param {Object} app express app instance
 * @param {Object} config configuration object
 */
module.exports = (app) => {
    const port = process.env.PORT || 3000;
    const env = process.env.NODE_ENV || 'local';

    if (env === 'local') {
        app.listen(port, () => {
            console.log(`To view your app, open this link in your browser: http://localhost:${port}`);
        });
    }
};
