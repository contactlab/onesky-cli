#!/usr/bin/env node

'use strict';
const meow = require('meow');
const oneskyCli = require('.');

const cli = meow(`
	Usage
	  $ onesky-cli [input] - download|upload

	Options
		--config -c - Path to config file [Default: ./package.json]

	Examples
	  $ onesky-cli download
	  $ onesky-cli --config oneSky.config.json upload
`);

oneskyCli(cli)
	.then(() => console.log('Operation completed.'))
	.catch(err => console.error(err));
