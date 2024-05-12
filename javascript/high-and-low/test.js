import test from 'ava';
import highAndLow from '.';

test(t => {
	t.is(highAndLow('4 -3 2 15 0 -1'), '15 -3');
	t.is(highAndLow('-1 -2 -3 -8 0 2'), '2 -8');
	t.is(highAndLow('9 1 4 6 8'), '9 1');
	t.is(highAndLow('-5 -25 -1 -2 -9'), '-1 -25');
});
