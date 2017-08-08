'use strict';

module.exports = {
	download: config => Object.assign({}, {
		path: 'i18n',
		languages: ['it', 'en'],
		fileName: 'en.json'
	}, config),
	upload: config => Object.assign({}, {
		path: 'i18n',
		format: 'HIERARCHICAL_JSON',
		keepStrings: false,
		languages: ['it', 'en']
	}, config)
};
