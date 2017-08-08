'use strict';

module.exports = config => config ?
														undefined :
														'Configuration [undefined]. Filename undefined or key "oneSkyCli" not present in package.json';
