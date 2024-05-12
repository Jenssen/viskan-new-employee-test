import test from 'ava';
import spinWords from '.';

test(t => {
	t.is(spinWords('We like JavaScript'), 'We like tpircSavaJ');
	t.is(spinWords('Viskan System AB'), 'naksiV metsyS AB');
	t.is(spinWords('Foo bar'), 'Foo bar');
});
