'use strict';

const onFocus = e => {
	const form = e.target.form;

	if (form.classList.contains('open')) {
		return;
	}

	form.classList.add('in');

	setTimeout(() => {
		form.classList.add('open');
		form.classList.remove('in');
	}, 1300);

	e.target.placeholder = 'Sök efter...';
	e.target.value = '';
};

const onClick = e => {
	const form = e.target.parentElement;
	const input = e.target.previousElementSibling;

	e.preventDefault();

	if (!form.classList.contains('open')) {
		return;
	}

	input.value = '';
	form.classList.add('close');
	form.classList.remove('open');

	setTimeout(() => {
		form.classList.remove('close');
	}, 1300);
};

window.onload = () => {
	document.querySelector('.SearchForm-input').addEventListener('focus', onFocus);
	document.querySelector('.SearchForm-after').addEventListener('click', onClick);
};

