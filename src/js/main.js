'use strict';

import './lib/lib';

document.addEventListener('DOMContentLoaded', () => {
	$('#first').on('click', () => {
		$('div').eq(1).fadeToggle(800);
	});

	$('[data-count="second"]').on('click', () => {
		$('div').eq(2).fadeToggle(800);
	});

	$('button').eq(2).on('click', () => {
		$('.w-500').fadeToggle(800);
	});

	$('.wrap-dropdown').html(`
	<div class="dropdown">
		<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
			Dropdown button
		</button>
		<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
			<a href="#" class="dropdown-item">Item 1</a>
			<a href="#" class="dropdown-item">Item 2</a>
			<a href="#" class="dropdown-item">Item 3</a>
		</div>
	</div>`);
	$('.dropdown-toggle').dropdown();
});