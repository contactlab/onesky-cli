'use strict';

const _isString = value => typeof value === 'string';

module.exports = flags => {
	for (const key in flags) {
		if (_isString(flags[key]) === false) {
			return `Param [${key}] must be a string. Found: {${key}: ${flags[key]}}`;
		}
	}

	return false;
};
