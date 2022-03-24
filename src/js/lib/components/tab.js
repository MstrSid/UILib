import $ from '../core';

$.prototype.tab = function () {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).on('click', () => {
			$(this[i])
				.addClass('tab-item__active')
				.siblings()
				.removeClass('tab-item__active')
				.closest('.tab')
				.find('.tab-content')
				.removeClass('tab-content__active').fadeOut(300)
				.eq($(this[i]).index())
				.addClass('tab-content__active').fadeIn(300);
		});
	}
};

$('[data-tabpanel] .tab-item').tab();