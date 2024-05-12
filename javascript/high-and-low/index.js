'use strict';
module.exports = input => {
	/*
		Split string to array and then use built in functions to find max and min value.
		Return a string to match test spec.
	*/
	const array = input.split(' ').map((number) => {
	  return parseInt(number)
	})

	const max = Math.max(...array)
	const min = Math.min(...array)

	const final = [max, min].join(' ')
	return final;
};
