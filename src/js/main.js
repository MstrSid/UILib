'use strict';

import './lib/lib';

document.addEventListener('DOMContentLoaded', () => {
	$('div').click(function () {
		$(this).fadeOut(1800);
	});
});