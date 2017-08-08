'use strict';

module.exports = flags => {
	return Object.keys(flags).reduce((acc, key) => {
		switch (key) {
			case 'c':
				return Object.assign({}, acc, {config: flags[key]});
			default:
				acc[key] = flags[key];
				return acc;
		}
	}, {});
};
