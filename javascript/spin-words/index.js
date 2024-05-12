'use strict';
module.exports = input => {
	/*
		Split string into an array and then reverse all words with more than 5 letters.
		Convert back to string again to match test spec
	*/
	const array = input.split(' ').map((word) => {
	  if (word.length > 5) {
	    return word.split('').reverse().join('')
	  }
	  return word
	})

	const final = array.join(' ')
	return final
};
