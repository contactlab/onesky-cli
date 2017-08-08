import test from 'ava';
import f from './../src/lib/validate-flags';

test('error message when not a string', t => {
	const err = f({config: true, path: true});
	t.is(err, 'Param [config] must be a string. Found: {config: true}');
});

test('false when flags are correct', t => {
	const err = f({config: 'this/is/string', path: 'this/is/string'});
	t.false(err);
});
