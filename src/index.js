'use strict';

const path = require('path');
const fs = require('fs-extra');

const commands = require('./lib/commands');
const defaultConfig = require('./lib/default-config');
const normalizeFlags = require('./lib/normalize-flags');
const validateFlags = require('./lib/validate-flags');
const validateOptionsFile = require('./lib/validate-options-file');
const validateInput = require('./lib/validate-input');

const getCommand = (initCommands, type) => initCommands[type] || undefined;
const getFirstInput = input => input.slice(0).toString();
const mergeDefault = (type, config) => defaultConfig[type](config);

module.exports = ({input, flags, pkg}) => {
	const currentInput = getFirstInput(input);
	const normalizedFlags = normalizeFlags(flags);
	const invalidInput = validateInput(currentInput);
	const invalidFlags = validateFlags(normalizedFlags);
	const invalidOptionsFile = validateOptionsFile(normalizedFlags.config || pkg.oneSkyCli);

	if (invalidInput || invalidFlags || invalidOptionsFile) {
		return Promise.reject(new Error(invalidInput || invalidFlags || invalidOptionsFile));
	}

	const getOptions = normalizedFlags.config ? fs.readJSON(path.resolve(normalizedFlags.config)) : Promise.resolve(pkg.oneSkyCli);

	return getOptions
		.then(options => {
			const finalOptions = mergeDefault(currentInput, options);
			const initCommands = commands(finalOptions);
			const command = getCommand(initCommands, currentInput);
			// Here you can pass optional params to the command.
			return command();
		});
};
