'use strict';

import './lib/lib';

document.addEventListener('DOMContentLoaded', () => {
	$('#add').on('click', function () {
		$('div').eq(2).toggleClass('active');
	});

	// $('#toggle').on('click', function () {
	// 	$(this).toggleAttribute('disabled');
	// });

	// $('#remove').on('click', function () {
	// 	$(this).removeAttribute('disabled');
	// });

	//console.log($('button').html());

	// $('div').on('click', function () {
	// 	console.log($(this).index());
	// });

	//console.log($('div').eq(2).find('.some'));
	console.log($('.test').eq(0).siblings());
});