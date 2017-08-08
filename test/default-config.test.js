import test from 'ava';
import f from './../src/lib/default-config';

test('get default config (download)', t => {
	const downloadConfig = {
		apiKey: 'yourApiKey',
		apiSecret: 'yourApiSecret',
		path: 'i18n',
		languages: ['it', 'en'],
		fileName: 'en.json'
	};

	const config = f.download({apiKey: 'yourApiKey', apiSecret: 'yourApiSecret'});
	t.deepEqual(config, downloadConfig);
});

test('get default config (upload)', t => {
	const uploadConfig = {
		apiKey: 'yourApiKey',
		apiSecret: 'yourApiSecret',
		path: 'i18n',
		languages: ['it', 'en'],
		format: 'HIERARCHICAL_JSON',
		keepStrings: false
	};

	const config = f.upload({apiKey: 'yourApiKey', apiSecret: 'yourApiSecret'});
	t.deepEqual(config, uploadConfig);
});
