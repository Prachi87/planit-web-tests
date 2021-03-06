/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
const path = require('path');
const fs = require('fs-extra');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'production';
  return getConfigurationByFile(file);
}
