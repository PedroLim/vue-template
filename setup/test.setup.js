/* eslint-disable import/no-extraneous-dependencies */
const hooks = require('require-extension-hooks');
const client = ({ filename }) => filename.includes('client/src');

// Setup browser environment
require('browser-env')();

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').include(client).plugin('vue');
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).include(client).plugin('babel');
