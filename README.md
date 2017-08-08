# onesky-cli [![Build Status](https://travis-ci.org/contactlab/onesky-cli.svg?branch=master)](https://travis-ci.org/contactlab/onesky-cli) [![Coverage Status](https://coveralls.io/repos/github/contactlab/onesky-cli/badge.svg?branch=master)](https://coveralls.io/github/contactlab/onesky-cli?branch=master)

> [One Sky App](https://www.oneskyapp.com/) cli tool, wrapper of [onesky-utils](https://www.npmjs.com/package/onesky-utils).


## Install
#### Local within your project.
You need to run the CLI as NPM script or with "yarn-run" (eg. `yarn onesky-cli download -c config.file.json`)

```
$ yarn add onesky-cli
```

#### Global
```
$ yarn add global onesky-cli
```

## Commands
Run the `--help` command to get the list of commands.

```
$ onesky-cli --help

	Usage
		$ onesky-cli [input] - download|upload

	Options
		--config -c - Path to config file [Default: ./package.json]

	Examples
		$ onesky-cli download
		$ onesky-cli upload --config oneSky.config.json
```

## Configuration
You can pass the configuration file path as param:

```
$ onesky-cli download -c oneSky.config.json
```

#### ... or can declare all configs within the package.json:

```json
{
	...
	"scripts": {
		...
	}
	...
	"oneSkyCli": {
		{
			"path": "fixture/i18n",
			"apiKey": "apiKey",
			"secret": "secretKey",
			"projectId": "1111"
		}
	}
}
```

## Default configurations
For `download` command:
```js
{
	path: 'i18n',
	languages: ['it', 'en'],
	fileName: 'en.json'
}
```

For `upload` command:
```js
{
	path: 'i18n',
	format: 'HIERARCHICAL_JSON',
	keepStrings: false,
	languages: ['it', 'en']
}
```

<!--

## Usage

```js
const oneskyCli = require('onesky-cli');

oneskyCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### oneskyCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI -->


## License
Released under the [Apache 2.0](https://github.com/contactlab/onesky-cli/blob/master/LICENSE) license.
