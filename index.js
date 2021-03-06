'use strict';

const semver = require('semver');

/**
 * Lazy load es6 module
 * @returns {Object} es6 project module
 */
const getModule = () => require('./lib'); // eslint-disable-line global-require

/**
 * load module for current version of node
 * @param {Object} getParams conditions for loading module
 * @param {String} getParams.nodeVersion current verion of node
 * @returns {Object} project module
 */
const getModule = (getParams) => {
  if (semver.gte(getParams.nodeVersion, 'v6.9.1')) {
    return getES6Module();
  }

  throw new Error(`Invalid node version: ${getParams.nodeVersion}`);
};

module.exports = getModule({ nodeVersion: process.version });
