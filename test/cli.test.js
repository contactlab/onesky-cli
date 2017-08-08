import path from 'path';
import test from 'ava';
import execa from 'execa';

const cwd = path.dirname(__dirname);
// Const packageJson = require(path.join(cwd, 'package.json'));
const cli = (args, opts) => execa(path.join(cwd, 'src', 'cli.js'), args, opts);

test('throw if operation ([input]) is not passed', async t => {
	const {stderr} = await cli([], {cwd});
	t.true(stderr.includes('Error: Operation [input] not passed as param or wrong. Please specify and operation or run "onesky-cli --help" for the list of commands'));
});

test('throw if flag "config" present but not specified as string', async t => {
	const {stderr} = await cli(['download', '-c'], {cwd});
	t.true(stderr.includes('Param [config] must be a string. Found: {config: true}'));
});

test('throw if flag "path" present but not specified as string', async t => {
	const {stderr} = await cli(['download', '-p'], {cwd});
	t.true(stderr.includes('Param [p] must be a string. Found: {p: true}'));
});

test('throw with wrong input', async t => {
	const {stderr} = await cli(['asdasdasd', '-c', './test/fixtures/config.sample.json'], {cwd});
	t.true(stderr.includes('Operation [input] not passed as param or wrong. Please specify and operation or run "onesky-cli --help" for the list of commands'));
});

test('correct download/upload but without permissions', async t => {
	const res = await cli(['download', '-c', './test/fixtures/config.sample.json'], {cwd});
	t.is(res.stderr, `{ message: 'Fail to authorize', code: 401 }`);
	t.is(res.stdout, 'Operation completed.');
});

