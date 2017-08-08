'use strict';

const path = require('path');
const fs = require('fs-extra');
const onesky = require('onesky-utils');

const _saveLang = (jsonLang, key, filePath) => {
	const totalPath = path.resolve(filePath, `${key}.json`);
	fs.ensureFile(totalPath)
		.then(() => fs.writeJSON(totalPath, jsonLang, {spaces: 2}));
};
const _saveLangs = (langs, folderPath) => Object.keys(langs).forEach(key => _saveLang(langs[key].translation, key, path.resolve(folderPath)));
const _isDoneUpload = (currentIndex, languages) => currentIndex + 1 === languages.length;
const _createLangsObject = (languages, res) => languages.reduce((acc, lang) => {
	acc[lang] = JSON.parse(res)[lang];
	return acc;
}, {});

module.exports = options => {
	return {
		download() {
			return onesky.getMultilingualFile(options)
						.then(res => Promise.resolve(_createLangsObject(options.languages, res)))
						.then(langs => _saveLangs(langs, options.path))
						.catch(err => console.error(err));
		},
		upload() {
			return new Promise((resolve, reject) => {
				options.languages.forEach((lang, i) => {
					const newOptions = Object.assign({}, options, {language: lang, fileName: `${lang}.json`});
					const pathToFile = path.resolve(newOptions.path, newOptions.fileName);
					fs.readFile(pathToFile, 'utf-8')
						.then(content => {
							newOptions.content = content;
							return onesky.postFile(newOptions);
						})
						.then(() => _isDoneUpload(i, options.languages) ? resolve() : undefined)
						.catch(err => reject(err));
				});
			});
		}
	};
};
