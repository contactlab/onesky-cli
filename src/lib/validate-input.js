'use strict';

// Available inputs
const _checkInput = {
	download: true,
	upload: true
};

module.exports = input => input && _checkInput[input] ?
													undefined :
													'Operation [input] not passed as param or wrong. Please specify and operation or run "onesky-cli --help" for the list of commands';
